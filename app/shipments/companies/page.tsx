import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function CargoCompanies() {
  return (
    <div className="space-y-4">
      <PageHeader title="Cargo Companies" />
      <DataTable 
        columns={[
          'Company ID',
          'Name',
          'Contact',
          'Active Orders',
          'Performance',
          'Status'
        ]} 
      />
    </div>
  )
}
