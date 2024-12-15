'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  ChevronDown,
  LayoutDashboard,
  ShoppingCart,
  Users,
  Gift,
  Package,
  PhoneCall,
  Shield,
  Truck,
  BarChart,
  Users2,
  Globe,
  Target,
  Box,
  UserCog,
  Wallet,
  Settings,
  Menu
} from 'lucide-react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

interface NavigationItem {
  name: string
  href?: string
  icon: React.ElementType
  children?: Array<{
    name: string
    href: string
  }>
}

const navigation: NavigationItem[] = [
  {
    name: 'Dashboard',
    href: '/',
    icon: LayoutDashboard
  },
  {
    name: 'Orders',
    href: '/orders',
    icon: ShoppingCart,
    children: [
      { name: 'New Orders', href: '/orders/new' },
      { name: 'No Answer', href: '/orders/no-answer' },
      { name: 'Call Later', href: '/orders/call-later' },
      { name: 'Trash', href: '/orders/trash' },
      { name: 'Canceled', href: '/orders/canceled' },
      { name: 'Approved', href: '/orders/approved' },
      { name: 'Future Sale', href: '/orders/future-sale' },
      { name: 'Suspicious Orders', href: '/orders/suspicious' },
      { name: 'In Transit', href: '/orders/in-transit' },
      { name: 'Delivered', href: '/orders/delivered' },
      { name: 'Returned', href: '/orders/returned' },
      { name: 'Manual Order', href: '/orders/manual' }
    ]
  },
  // ... rest of your navigation items
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [openMenus, setOpenMenus] = useState<string[]>([])
  const pathname = usePathname()

  const toggleMenu = (menuName: string) => {
    setOpenMenus(current => 
      current.includes(menuName)
        ? current.filter(name => name !== menuName)
        : [...current, menuName]
    )
  }

  const isMenuOpen = (menuName: string) => {
    return openMenus.includes(menuName)
  }

  const isMenuActive = (item: NavigationItem) => {
    if (!pathname) return false
    
    if (item.href) {
      return pathname === item.href || pathname.startsWith(item.href + '/')
    }
    
    return item.children?.some(child => pathname === child.href)
  }

  return (
    <div className={cn(
      "border-r bg-background transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex h-16 items-center justify-between px-4">
        {!isCollapsed && <span className="text-lg font-semibold">CRM</span>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-md hover:bg-accent"
        >
          <Menu size={20} />
        </button>
      </div>
      <nav className="space-y-1 px-2">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = isMenuActive(item)

          if (item.children) {
            return (
              <Collapsible
                key={item.name}
                open={isMenuOpen(item.name)}
                onOpenChange={() => toggleMenu(item.name)}
              >
                <CollapsibleTrigger
                  className={cn(
                    "flex items-center w-full px-2 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-accent"
                  )}
                >
                  <Icon className="h-5 w-5 mr-2 shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="flex-1 text-left">{item.name}</span>
                      <ChevronDown className={cn(
                        "h-4 w-4 shrink-0 transition-transform duration-200",
                        isMenuOpen(item.name) ? "rotate-180" : ""
                      )} />
                    </>
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1 px-2">
                  {!isCollapsed && item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className={cn(
                        "flex items-center py-2 px-4 text-sm font-medium rounded-md transition-colors",
                        pathname === child.href
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-accent"
                      )}
                    >
                      {child.name}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            )
          }

          return (
            <Link
              key={item.name}
              href={item.href || '/'}
              className={cn(
                "flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-accent"
              )}
            >
              <Icon className="h-5 w-5 mr-2 shrink-0" />
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
