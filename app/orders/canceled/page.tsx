import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function CanceledOrders() {
  return (
    <div className="space-y-4">
      <PageHeader title="Canceled Orders" />
      <DataTable 
        columns={[
          'Order ID',
          'Customer',
          'Product',
          'Amount',
          'Cancel Date',
          'Reason'
        ]} 
      />
    </div>
  )
}
