import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function MissingCalls() {
  return (
    <div className="space-y-4">
      <PageHeader title="Missing Calls" />
      <DataTable 
        columns={[
          'Call ID',
          'Customer',
          'Time',
          'Date',
          'Status'
        ]} 
      />
    </div>
  )
}
