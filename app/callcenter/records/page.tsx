import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function CallRecords() {
  return (
    <div className="space-y-4">
      <PageHeader title="Call Records" />
      <DataTable 
        columns={[
          'Call ID',
          'Customer',
          'Agent',
          'Duration',
          'Date',
          'Status'
        ]} 
      />
    </div>
  )
}
