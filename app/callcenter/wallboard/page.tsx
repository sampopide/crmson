import { PageHeader } from '@/components/ui/page-header'
import { Card } from '@/components/ui/card'

export default function Wallboard() {
  return (
    <div className="space-y-4">
      <PageHeader title="Wallboard" />
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-4">
          <h3 className="font-semibold">Active Calls</h3>
          <p className="text-2xl font-bold">12</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Waiting Calls</h3>
          <p className="text-2xl font-bold">5</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Available Agents</h3>
          <p className="text-2xl font-bold">8</p>
        </Card>
      </div>
    </div>
  )
}
