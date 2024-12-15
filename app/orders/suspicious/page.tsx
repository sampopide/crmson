import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function SuspiciousOrders() {
  return (
    <div className="space-y-4">
      <PageHeader title="Suspicious Orders" />
      <DataTable 
        columns={[
          'Order ID',
          'Customer',
          'Product',
          'Amount',
          'Flag Reason',
          'Status'
        ]} 
      />
    </div>
  )
}
