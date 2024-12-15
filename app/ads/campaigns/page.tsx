import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function Campaigns() {
  return (
    <div className="space-y-4">
      <PageHeader title="Campaigns">
        <button className="rounded bg-primary px-4 py-2 text-primary-foreground">
          Create Campaign
        </button>
      </PageHeader>
      <DataTable 
        columns={[
          'Campaign ID',
          'Name',
          'Network',
          'Budget',
          'Performance',
          'Status'
        ]} 
      />
    </div>
  )
}
