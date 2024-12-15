import { PageHeader } from '@/components/ui/page-header'
import { Card } from '@/components/ui/card'

export default function Shipments() {
  return (
    <div className="space-y-4">
      <PageHeader title="Shipments Overview" />
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-4">
          <h3 className="font-semibold">In Transit</h3>
          <p className="text-2xl font-bold">234</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Delivered</h3>
          <p className="text-2xl font-bold">567</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Pending</h3>
          <p className="text-2xl font-bold">89</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Delayed</h3>
          <p className="text-2xl font-bold">12</p>
        </Card>
      </div>
    </div>
  )
}
