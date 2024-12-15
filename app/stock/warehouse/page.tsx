import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function Warehouse() {
  return (
    <div className="space-y-4">
      <PageHeader title="Warehouse" />
      <DataTable 
        columns={[
          'Product ID',
          'Name',
          'Category',
          'In Stock',
          'Reserved',
          'Available'
        ]} 
      />
    </div>
  )
}
