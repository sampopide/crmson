import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function CallLaterOrders() {
  return (
    <div className="space-y-4">
      <PageHeader title="Call Later Orders" />
      <DataTable 
        columns={[
          'Order ID',
          'Customer',
          'Product',
          'Amount',
          'Callback Time',
          'Status'
        ]} 
      />
    </div>
  )
}
