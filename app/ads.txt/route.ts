import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'ads.txt')
    const content = await fs.readFile(filePath, 'utf8')

    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600'
      }
    })
  } catch (error) {
    return new NextResponse('Not Found', { status: 404 })
  }
}
