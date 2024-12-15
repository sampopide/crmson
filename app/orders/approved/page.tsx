import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function ApprovedOrders() {
  return (
    <div className="space-y-4">
      <PageHeader title="Approved Orders" />
      <DataTable 
        columns={[
          'Order ID',
          'Customer',
          'Product',
          'Amount',
          'Approval Date',
          'Status'
        ]} 
      />
    </div>
  )
}
