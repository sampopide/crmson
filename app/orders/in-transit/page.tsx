import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function InTransitOrders() {
  return (
    <div className="space-y-4">
      <PageHeader title="In Transit Orders" />
      <DataTable 
        columns={[
          'Order ID',
          'Customer',
          'Product',
          'Amount',
          'Shipping Date',
          'Estimated Delivery'
        ]} 
      />
    </div>
  )
}
