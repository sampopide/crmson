import { PageHeader } from '@/components/ui/page-header'
import { Card } from '@/components/ui/card'

export default function Users() {
  return (
    <div className="space-y-4">
      <PageHeader title="User Management Overview" />
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-4">
          <h3 className="font-semibold">Total Users</h3>
          <p className="text-2xl font-bold">567</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Active Users</h3>
          <p className="text-2xl font-bold">489</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">New Users</h3>
          <p className="text-2xl font-bold">23</p>
        </Card>
      </div>
    </div>
  )
}
