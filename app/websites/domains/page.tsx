import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function Domains() {
  return (
    <div className="space-y-4">
      <PageHeader title="Domains">
        <button className="rounded bg-primary px-4 py-2 text-primary-foreground">
          Add Domain
        </button>
      </PageHeader>
      <DataTable 
        columns={[
          'Domain',
          'Status',
          'Expiry Date',
          'SSL Status',
          'DNS Provider'
        ]} 
      />
    </div>
  )
}
