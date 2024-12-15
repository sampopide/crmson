'use client'

import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Breadcrumb() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
      <Link href="/" className="flex items-center hover:text-foreground">
        <Home className="h-4 w-4" />
      </Link>
      {segments.map((segment, index) => {
        const path = `/${segments.slice(0, index + 1).join('/')}`
        const isLast = index === segments.length - 1
        const title = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')

        return (
          <div key={path} className="flex items-center">
            <ChevronRight className="h-4 w-4" />
            {isLast ? (
              <span className="ml-1 text-foreground">{title}</span>
            ) : (
              <Link href={path} className="ml-1 hover:text-foreground">
                {title}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
