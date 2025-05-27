import { NextResponse } from 'next/server'
import { sendMessage } from '@/lib/actions/sendMessage'

export async function POST(req: Request) {
    try {
      const body = await req.json()
      
      
      const result = await sendMessage(body)
      return NextResponse.json(result)
    } catch  {
      
      return NextResponse.json(
        { error: 'Internal server error'},
        { status: 500 }
      )
    }
  }