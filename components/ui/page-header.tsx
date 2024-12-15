import { ReactNode } from 'react'
import { Breadcrumb } from './breadcrumb'

interface PageHeaderProps {
  title: string
  children?: ReactNode
}

export function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <div className="space-y-2 pb-4">
      <Breadcrumb />
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {children}
      </div>
    </div>
  )
}
