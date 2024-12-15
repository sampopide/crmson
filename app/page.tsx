import { Card } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Welcome back</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4">
          <h3 className="font-semibold">Total Orders</h3>
          <p className="text-2xl font-bold">1,234</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Active Customers</h3>
          <p className="text-2xl font-bold">891</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Pending Orders</h3>
          <p className="text-2xl font-bold">56</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Revenue</h3>
          <p className="text-2xl font-bold">$12,345</p>
        </Card>
      </div>
    </div>
  )
}
