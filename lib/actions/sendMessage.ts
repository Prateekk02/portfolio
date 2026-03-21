'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { sendMail } from '../sendMail'

export async function sendMessage(data: {
  name: string
  email: string
  message: string
}) {
  const { name, email, message } = data

  try {
    const res = await sendMail({ name, email, message })

    
    if (!res.success) {
      throw new Error('Failed to send email')
    }

    await prisma.message.create({
      data: { name, email, message },
    })

    revalidatePath('/')
    return { success: true }
  } catch (error) {
    console.error('sendMessage error:', error)
    throw new Error('Message sending failed. Please try again.')
  }
}
