import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function TrashOrders() {
  return (
    <div className="space-y-4">
      <PageHeader title="Trash Orders" />
      <DataTable 
        columns={[
          'Order ID',
          'Customer',
          'Product',
          'Amount',
          'Deleted Date',
          'Reason'
        ]} 
      />
    </div>
  )
}
