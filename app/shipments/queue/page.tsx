import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function CargoQueue() {
  return (
    <div className="space-y-4">
      <PageHeader title="Cargo Queue" />
      <DataTable 
        columns={[
          'Order ID',
          'Customer',
          'Products',
          'Status',
          'Queue Time',
          'Priority'
        ]} 
      />
    </div>
  )
}
