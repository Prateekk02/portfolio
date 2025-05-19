"use client"

import * as React from "react"
import {useState, useEffect} from 'react'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if(!mounted)
    return null;

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      <Moon
        className="h-5 w-5 rotate-0 scale-100 transition-transform duration-300 ease-in-out dark:-rotate-90 dark:scale-0  text-blue-400"
      />
      <Sun
        className="absolute h-5 w-5 top-2 left-2 rotate-90 scale-0 transition-transform duration-300 ease-in-out dark:rotate-0 dark:scale-100 text-yellow-500 "
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}