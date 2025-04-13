"use client"

import * as React from "react"
import {useState, useEffect} from 'react'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), [])

  if(!mounted)
    return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button
          variant="ghost"
          size="icon"
          className="relative p-1 hover:bg-transparent hover:cursor-pointer"
        >
          <Sun
            className="h-4 w-4 rotate-0 scale-100 transition-transform duration-300 ease-in-out group-hover:rotate-90 dark:-rotate-90 dark:scale-0"
          />
          <Moon
            className="absolute h-4 w-4 rotate-90 scale-0 transition-transform duration-300 ease-in-out dark:rotate-0 dark:scale-100"
          />
          <span className="sr-only">Toggle theme</span>
      </Button>

      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
