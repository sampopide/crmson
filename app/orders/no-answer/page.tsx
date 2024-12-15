import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function NoAnswerOrders() {
  return (
    <div className="space-y-4">
      <PageHeader title="No Answer Orders" />
      <DataTable 
        columns={[
          'Order ID',
          'Customer',
          'Product',
          'Amount',
          'Call Attempts',
          'Last Called',
          'Status'
        ]} 
      />
    </div>
  )
}
