import { PageHeader } from '@/components/ui/page-header'
import { Card } from '@/components/ui/card'

export default function Products() {
  return (
    <div className="space-y-4">
      <PageHeader title="Products Overview" />
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-4">
          <h3 className="font-semibold">Total Products</h3>
          <p className="text-2xl font-bold">567</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Low Stock</h3>
          <p className="text-2xl font-bold">23</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Out of Stock</h3>
          <p className="text-2xl font-bold">12</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Categories</h3>
          <p className="text-2xl font-bold">45</p>
        </Card>
      </div>
    </div>
  )
}
