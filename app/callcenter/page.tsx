import { PageHeader } from '@/components/ui/page-header'
import { Card } from '@/components/ui/card'

export default function Callcenter() {
  return (
    <div className="space-y-4">
      <PageHeader title="Callcenter Overview" />
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-4">
          <h3 className="font-semibold">Active Calls</h3>
          <p className="text-2xl font-bold">24</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Waiting Calls</h3>
          <p className="text-2xl font-bold">12</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Missed Calls</h3>
          <p className="text-2xl font-bold">8</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Average Wait Time</h3>
          <p className="text-2xl font-bold">2m 30s</p>
        </Card>
      </div>
    </div>
  )
}
