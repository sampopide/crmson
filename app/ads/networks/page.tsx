import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function Networks() {
  return (
    <div className="space-y-4">
      <PageHeader title="Ad Networks">
        <button className="rounded bg-primary px-4 py-2 text-primary-foreground">
          Add Network
        </button>
      </PageHeader>
      <DataTable 
        columns={[
          'Network ID',
          'Name',
          'Type',
          'Spend',
          'ROI',
          'Status'
        ]} 
      />
    </div>
  )
}
