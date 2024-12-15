import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function CargoList() {
  return (
    <div className="space-y-4">
      <PageHeader title="Cargo List" />
      <DataTable 
        columns={[
          'Tracking ID',
          'Order ID',
          'Customer',
          'Carrier',
          'Status',
          'Shipping Date'
        ]} 
      />
    </div>
  )
}
