import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function Customers() {
  return (
    <div className="space-y-4">
      <PageHeader title="Customers">
        <a 
          href="/clients/add" 
          className="rounded bg-primary px-4 py-2 text-primary-foreground"
        >
          Add Customer
        </a>
      </PageHeader>
      <DataTable 
        columns={[
          'Customer ID',
          'Name',
          'Email',
          'Phone',
          'Orders',
          'Status'
        ]} 
      />
    </div>
  )
}
