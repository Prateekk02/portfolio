import { NextResponse } from 'next/server'
import { sendMessage } from '@/lib/actions/sendMessage'

export async function POST(req: Request) {
    try {
      const body = await req.json()
      console.log('Request body:', body) // Debug log
      
      const result = await sendMessage(body)
      return NextResponse.json(result)
    } catch (error) {
      console.error('API Error:', error)
      return NextResponse.json(
        { error: 'Internal server error'},
        { status: 500 }
      )
    }
  }