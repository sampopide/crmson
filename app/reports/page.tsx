import { PageHeader } from '@/components/ui/page-header'

export default function Reports() {
  return (
    <div className="space-y-4">
      <PageHeader title="Reports" />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Sales Report</h3>
          <div className="mt-4 h-[200px] animate-pulse rounded bg-muted" />
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Customer Analytics</h3>
          <div className="mt-4 h-[200px] animate-pulse rounded bg-muted" />
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Inventory Status</h3>
          <div className="mt-4 h-[200px] animate-pulse rounded bg-muted" />
        </div>
      </div>
    </div>
  )
}
