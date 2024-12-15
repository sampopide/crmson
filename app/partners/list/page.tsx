import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function PartnersList() {
  return (
    <div className="space-y-4">
      <PageHeader title="Partners">
        <button className="rounded bg-primary px-4 py-2 text-primary-foreground">
          Add Partner
        </button>
      </PageHeader>
      <DataTable 
        columns={[
          'Partner ID',
          'Name',
          'Type',
          'Revenue',
          'Status',
          'Actions'
        ]} 
      />
    </div>
  )
}
