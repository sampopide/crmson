import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function ReturnedOrders() {
  return (
    <div className="space-y-4">
      <PageHeader title="Returned Orders" />
      <DataTable 
        columns={[
          'Order ID',
          'Customer',
          'Product',
          'Amount',
          'Return Date',
          'Reason'
        ]} 
      />
    </div>
  )
}
