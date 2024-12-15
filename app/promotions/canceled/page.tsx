import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function CanceledClients() {
  return (
    <div className="space-y-4">
      <PageHeader title="Canceled Clients" />
      <DataTable 
        columns={[
          'Client ID',
          'Name',
          'Email',
          'Cancel Date',
          'Reason',
          'Actions'
        ]} 
      />
    </div>
  )
}
