"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Filter } from "lucide-react"

type Theme = {
  id: string
  name: string
  description: string
}

const themes: Theme[] = [
  {
    id: "inclusive",
    name: "Inclusive",
    description: "Content suitable for all cultural backgrounds",
  },
  {
    id: "western",
    name: "Western-centered",
    description: "Content with Western cultural context",
  },
  {
    id: "eastern",
    name: "Eastern-centered",
    description: "Content with Eastern cultural context",
  },
  {
    id: "african",
    name: "African-centered",
    description: "Content with African cultural context",
  },
  {
    id: "secular",
    name: "Secular",
    description: "Non-religious educational content",
  },
]

export function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-9">
          <Filter className="h-4 w-4 mr-2" />
          <span className="hidden md:inline-flex">{currentTheme.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {themes.map((theme) => (
          <DropdownMenuItem key={theme.id} onClick={() => setCurrentTheme(theme)} className="cursor-pointer">
            <div className="flex flex-col">
              <span className="font-medium">{theme.name}</span>
              <span className="text-xs text-gray-500">{theme.description}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
