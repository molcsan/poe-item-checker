import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(`https://www.pathofexile.com/api/trade2/search/${body.league}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'OAuth poe-item-checker/1.0.0 (contact: sanzodown@hotmail.fr)',
        'Accept': 'application/json',
        'Origin': 'https://www.pathofexile.com',
        'Referer': 'https://www.pathofexile.com/trade',
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
