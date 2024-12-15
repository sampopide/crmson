import { PageHeader } from '@/components/ui/page-header'
import { Card } from '@/components/ui/card'

export default function Websites() {
  return (
    <div className="space-y-4">
      <PageHeader title="Websites Overview" />
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-4">
          <h3 className="font-semibold">Total Traffic</h3>
          <p className="text-2xl font-bold">1.2M</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Active Sites</h3>
          <p className="text-2xl font-bold">45</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Conversion Rate</h3>
          <p className="text-2xl font-bold">3.4%</p>
        </Card>
      </div>
    </div>
  )
}
