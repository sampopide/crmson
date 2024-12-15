import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function DeliveredOrders() {
  return (
    <div className="space-y-4">
      <PageHeader title="Delivered Orders" />
      <DataTable 
        columns={[
          'Order ID',
          'Customer',
          'Product',
          'Amount',
          'Delivery Date',
          'Status'
        ]} 
      />
    </div>
  )
}
