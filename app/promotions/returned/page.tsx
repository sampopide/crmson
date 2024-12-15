import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function ReturnedClients() {
  return (
    <div className="space-y-4">
      <PageHeader title="Returned Clients" />
      <DataTable 
        columns={[
          'Client ID',
          'Name',
          'Email',
          'Return Date',
          'Reason',
          'Actions'
        ]} 
      />
    </div>
  )
}
