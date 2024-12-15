import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function Cloudflare() {
  return (
    <div className="space-y-4">
      <PageHeader title="Cloudflare" />
      <div className="grid gap-4 md:grid-cols-3 mb-4">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Total Requests</h3>
          <p className="text-2xl font-bold">1.2M</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Bandwidth</h3>
          <p className="text-2xl font-bold">850GB</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Threats</h3>
          <p className="text-2xl font-bold">124</p>
        </div>
      </div>
      <DataTable 
        columns={[
          'Domain',
          'Status',
          'SSL',
          'Cache',
          'Threats',
          'Actions'
        ]} 
      />
    </div>
  )
}
