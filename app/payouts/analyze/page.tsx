import { PageHeader } from '@/components/ui/page-header'
import { Card } from '@/components/ui/card'

export default function PayoutAnalyze() {
  return (
    <div className="space-y-4">
      <PageHeader title="Payout Analysis" />
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-4">
          <h3 className="font-semibold">Total Payouts</h3>
          <p className="text-2xl font-bold">$45,678</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Pending Payouts</h3>
          <p className="text-2xl font-bold">$12,345</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Average Payout</h3>
          <p className="text-2xl font-bold">$2,890</p>
        </Card>
      </div>
      <div className="rounded-lg border p-4">
        <h3 className="font-semibold mb-4">Payout Trends</h3>
        <div className="h-[300px] animate-pulse rounded bg-muted" />
      </div>
    </div>
  )
}
