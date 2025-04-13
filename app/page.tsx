import React from 'react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-black dark:text-white mb-4">
        Welcome to the Dark Side 😎
      </h1>
      <ThemeToggle />
    </main>
    
  )
}
