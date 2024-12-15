import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function NoAnswers() {
  return (
    <div className="space-y-4">
      <PageHeader title="No Answers" />
      <DataTable 
        columns={[
          'Call ID',
          'Customer',
          'Attempts',
          'Last Try',
          'Status'
        ]} 
      />
    </div>
  )
}
