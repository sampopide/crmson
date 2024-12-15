import { PageHeader } from '@/components/ui/page-header'
import { Card } from '@/components/ui/card'

export default function StockPerformance() {
  return (
    <div className="space-y-4">
      <PageHeader title="Stock Performance" />
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-4">
          <h3 className="font-semibold">Turnover Rate</h3>
          <p className="text-2xl font-bold">4.5x</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Out of Stock Items</h3>
          <p className="text-2xl font-bold">12</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Low Stock Alerts</h3>
          <p className="text-2xl font-bold">28</p>
        </Card>
      </div>
      <div className="rounded-lg border p-4">
        <h3 className="font-semibold mb-4">Stock Movement</h3>
        <div className="h-[300px] animate-pulse rounded bg-muted" />
      </div>
    </div>
  )
}
