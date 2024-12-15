import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function FutureSaleOrders() {
  return (
    <div className="space-y-4">
      <PageHeader title="Future Sale Orders" />
      <DataTable 
        columns={[
          'Order ID',
          'Customer',
          'Product',
          'Amount',
          'Scheduled Date',
          'Status'
        ]} 
      />
    </div>
  )
}
