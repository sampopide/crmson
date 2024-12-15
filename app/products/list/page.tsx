import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function ProductsList() {
  return (
    <div className="space-y-4">
      <PageHeader title="Products">
        <a 
          href="/products/add" 
          className="rounded bg-primary px-4 py-2 text-primary-foreground"
        >
          Add Product
        </a>
      </PageHeader>
      <DataTable 
        columns={[
          'Product ID',
          'Name',
          'Category',
          'Price',
          'Stock',
          'Status'
        ]} 
      />
    </div>
  )
}
