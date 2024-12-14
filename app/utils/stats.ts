import Fuse from 'fuse.js';

export interface StatOption {
  id: string;
  text: string;
  type: string;
  option?: Record<string, unknown>;
}

interface StatEntry {
  id: string;
  text: string;
  option?: Record<string, unknown>;
}

interface StatGroup {
  label: string;
  entries: StatEntry[];
}

let statsCache: StatOption[] | null = null;
let fuseInstance: Fuse<StatOption> | null = null;

export async function fetchStats(): Promise<StatOption[]> {
  if (statsCache) return statsCache;

  try {
    const response = await fetch('/api/poe/stats');
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    statsCache = data.result.flatMap((group: StatGroup) =>
      group.entries.map((entry: StatEntry) => ({
        id: entry.id,
        text: entry.text,
        type: group.label,
        option: entry.option
      }))
    );

    if (statsCache) {
      fuseInstance = new Fuse(statsCache!, {
        keys: ['text'],
        includeScore: true,
        threshold: 0.3,
        distance: 100,
        ignoreLocation: true,
        useExtendedSearch: true,
        getFn: (obj, path) => {
          const value = obj[path as keyof StatOption];
          if (path === 'text') {
            return normalizeStatText(value as string);
          }
          return '';
        }
      });
    }

    return statsCache ?? [];
  } catch (error) {
    console.error('Failed to fetch stats:', error);
    return [];
  }
}

function normalizeStatText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[+-]?\d+\.?\d*/g, '#')
    .replace(/\s+/g, ' ')
    .replace(/^adds /, '')
    .replace(/^grants /, '')
    .replace(/^has /, '')
    .trim();
}

export function findStatId(statText: string, stats: StatOption[]): string | null {
  if (!fuseInstance) {
    fuseInstance = new Fuse(stats, {
      keys: ['text'],
      includeScore: true,
      threshold: 0.3,
      distance: 100,
      ignoreLocation: true,
      useExtendedSearch: true,
      getFn: (obj, path) => {
        const value = obj[path as keyof StatOption];
        if (path === 'text') {
          return normalizeStatText(value as string);
        }
        return '';
      }
    });
  }

  const normalizedInput = normalizeStatText(statText);
  const results = fuseInstance.search(normalizedInput);

  // Log search results for debugging
  console.log('Fuzzy search results for:', statText);
  results.slice(0, 3).forEach(result => {
    console.log(`Score: ${result.score}, Text: ${result.item.text}`);
  });

  if (results.length > 0 && results[0].score && results[0].score < 0.3) {
    return results[0].item.id;
  }

  return null;
}

export function extractValue(statText: string): number {
  const matches = statText.match(/([+-]?\d+\.?\d*)/g);
  if (!matches) return 0;
  return parseFloat(matches[0]);
}
