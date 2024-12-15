'use client'

import { Bell, Search, User } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="h-16 border-b bg-background px-4">
      <div className="flex h-full items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search..."
              className="h-9 w-[200px] rounded-md border bg-background px-8 text-sm"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
              3
            </span>
          </button>
          <button className="flex items-center gap-2 rounded-full bg-accent p-2">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
