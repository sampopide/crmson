import { PageHeader } from '@/components/ui/page-header'
import { Card } from '@/components/ui/card'

export default function Ads() {
  return (
    <div className="space-y-4">
      <PageHeader title="Ads Overview" />
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-4">
          <h3 className="font-semibold">Active Campaigns</h3>
          <p className="text-2xl font-bold">45</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Total Spend</h3>
          <p className="text-2xl font-bold">$23,456</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">ROI</h3>
          <p className="text-2xl font-bold">234%</p>
        </Card>
      </div>
    </div>
  )
}
