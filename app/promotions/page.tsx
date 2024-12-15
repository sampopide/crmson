import { PageHeader } from '@/components/ui/page-header'
import { Card } from '@/components/ui/card'

export default function Promotions() {
  return (
    <div className="space-y-4">
      <PageHeader title="Promotions Overview" />
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-4">
          <h3 className="font-semibold">Active Promotions</h3>
          <p className="text-2xl font-bold">15</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Total Revenue</h3>
          <p className="text-2xl font-bold">$12,345</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Conversion Rate</h3>
          <p className="text-2xl font-bold">23%</p>
        </Card>
      </div>
    </div>
  )
}
