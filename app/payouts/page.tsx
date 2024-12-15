import { PageHeader } from '@/components/ui/page-header'
import { Card } from '@/components/ui/card'

export default function Payouts() {
  return (
    <div className="space-y-4">
      <PageHeader title="Payouts Overview" />
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-4">
          <h3 className="font-semibold">Total Payouts</h3>
          <p className="text-2xl font-bold">$123,456</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Pending Payouts</h3>
          <p className="text-2xl font-bold">$23,456</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Completed Payouts</h3>
          <p className="text-2xl font-bold">$100,000</p>
        </Card>
      </div>
    </div>
  )
}
