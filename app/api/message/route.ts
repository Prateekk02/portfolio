import { NextResponse } from 'next/server'
import { sendMessage } from '@/lib/actions/sendMessage'

export async function POST(req: Request) {
  const body = await req.json()
  await sendMessage(body)
  return NextResponse.json({ success: true })
}