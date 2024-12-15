import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function NewOrders() {
  return (
    <div className="space-y-4">
      <PageHeader title="New Orders" />
      <DataTable 
        columns={[
          'Order ID',
          'Customer',
          'Product',
          'Amount',
          'Status',
          'Date'
        ]} 
      />
    </div>
  )
}
