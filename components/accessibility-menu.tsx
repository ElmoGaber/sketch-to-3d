"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Accessibility, ZoomIn, ZoomOut, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function AccessibilityMenu() {
  const [mounted, setMounted] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const { setTheme, theme } = useTheme()
  const [highContrast, setHighContrast] = useState(false)

  // After mounting, we can safely access the window object
  useEffect(() => {
    setMounted(true)
    // Get the stored font size or use default
    const storedFontSize = localStorage.getItem("fontSize")
    if (storedFontSize) {
      setFontSize(Number.parseInt(storedFontSize))
      document.documentElement.style.fontSize = `${storedFontSize}px`
    }

    // Get the stored high contrast setting
    const storedHighContrast = localStorage.getItem("highContrast")
    if (storedHighContrast === "true") {
      setHighContrast(true)
      document.documentElement.classList.add("high-contrast")
    }
  }, [])

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24)
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}px`
    localStorage.setItem("fontSize", newSize.toString())
  }

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12)
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}px`
    localStorage.setItem("fontSize", newSize.toString())
  }

  const resetFontSize = () => {
    setFontSize(16)
    document.documentElement.style.fontSize = "16px"
    localStorage.setItem("fontSize", "16")
  }

  const toggleHighContrast = () => {
    setHighContrast(!highContrast)
    if (!highContrast) {
      document.documentElement.classList.add("high-contrast")
      localStorage.setItem("highContrast", "true")
    } else {
      document.documentElement.classList.remove("high-contrast")
      localStorage.setItem("highContrast", "false")
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
          <Accessibility className="h-4 w-4" />
          <span className="sr-only">Accessibility options</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Accessibility</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => {
            setTheme("light")
            localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
          }}
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Light Mode</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => {
            setTheme("dark")
            localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
          }}
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark Mode</span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={toggleHighContrast}>
          <span className="mr-2">🔳</span>
          <span>{highContrast ? "Disable" : "Enable"} High Contrast</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={increaseFontSize}>
          <ZoomIn className="mr-2 h-4 w-4" />
          <span>Increase Font Size</span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={decreaseFontSize}>
          <ZoomOut className="mr-2 h-4 w-4" />
          <span>Decrease Font Size</span>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={resetFontSize}>
          <span className="mr-2">↩️</span>
          <span>Reset Font Size</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
