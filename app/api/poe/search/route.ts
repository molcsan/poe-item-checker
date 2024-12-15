import { NextResponse } from 'next/server';

// Rate limiting variables
const RATE_LIMIT_WINDOW = 5000; // 5 seconds
const MAX_REQUESTS_PER_WINDOW = 20;
const MIN_REQUEST_INTERVAL = 1000; // 1 second

let lastRequestTime = 0;
let requestsInWindow = 0;
let windowStartTime = Date.now();

export async function POST(request: Request) {
  try {
    // Rate limiting check
    const now = Date.now();

    // Reset window if needed
    if (now - windowStartTime >= RATE_LIMIT_WINDOW) {
      windowStartTime = now;
      requestsInWindow = 0;
    }

    // Check window limit
    if (requestsInWindow >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json({
        error: 'Rate limit exceeded. Please try again later.',
        details: 'Maximum requests per window reached'
      }, { status: 429 });
    }

    // Check interval
    const timeSinceLastRequest = now - lastRequestTime;
    if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
      const waitTime = MIN_REQUEST_INTERVAL - timeSinceLastRequest;
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }

    // Update rate limiting trackers
    lastRequestTime = Date.now();
    requestsInWindow++;

    const body = await request.json();

    const response = await fetch(`https://www.pathofexile.com/api/trade2/search/${body.league}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'OAuth poe-item-checker/1.0.0 (contact: sanzodown@hotmail.fr)',
        'Accept': '*/*',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      body: JSON.stringify(body.query),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Trade API Error:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      });
      return NextResponse.json({
        error: `Trade API failed: ${response.status} ${response.statusText}`,
        details: errorText
      }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error with trade search:', error);
    return NextResponse.json({
      error: 'Failed to perform trade search',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}
