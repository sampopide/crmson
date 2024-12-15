import { PageHeader } from '@/components/ui/page-header'
import { Card } from '@/components/ui/card'

export default function Stock() {
  return (
    <div className="space-y-4">
      <PageHeader title="Stock Management Overview" />
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-4">
          <h3 className="font-semibold">Total Items</h3>
          <p className="text-2xl font-bold">12,345</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Low Stock</h3>
          <p className="text-2xl font-bold">234</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Out of Stock</h3>
          <p className="text-2xl font-bold">45</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Stock Value</h3>
          <p className="text-2xl font-bold">$234,567</p>
        </Card>
      </div>
    </div>
  )
}
