import { PageHeader } from '@/components/ui/page-header'
import { Card } from '@/components/ui/card'

export default function Clients() {
  return (
    <div className="space-y-4">
      <PageHeader title="Clients Overview" />
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-4">
          <h3 className="font-semibold">Total Clients</h3>
          <p className="text-2xl font-bold">1,234</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Active Clients</h3>
          <p className="text-2xl font-bold">891</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">New Clients</h3>
          <p className="text-2xl font-bold">56</p>
        </Card>
      </div>
    </div>
  )
}
