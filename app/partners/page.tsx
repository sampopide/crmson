import { PageHeader } from '@/components/ui/page-header'
import { Card } from '@/components/ui/card'

export default function Partners() {
  return (
    <div className="space-y-4">
      <PageHeader title="Partners Overview" />
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-4">
          <h3 className="font-semibold">Total Partners</h3>
          <p className="text-2xl font-bold">156</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Active Partners</h3>
          <p className="text-2xl font-bold">134</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Partner Revenue</h3>
          <p className="text-2xl font-bold">$45,678</p>
        </Card>
      </div>
    </div>
  )
}
