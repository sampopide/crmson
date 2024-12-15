import { PageHeader } from '@/components/ui/page-header'
import { Card } from '@/components/ui/card'

export default function Orders() {
  return (
    <div className="space-y-4">
      <PageHeader title="Orders Overview" />
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-4">
          <h3 className="font-semibold">New Orders</h3>
          <p className="text-2xl font-bold">123</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Pending</h3>
          <p className="text-2xl font-bold">45</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Delivered</h3>
          <p className="text-2xl font-bold">789</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Returned</h3>
          <p className="text-2xl font-bold">12</p>
        </Card>
      </div>
    </div>
  )
}
