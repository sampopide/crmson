import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function Roles() {
  return (
    <div className="space-y-4">
      <PageHeader title="User Roles">
        <button className="rounded bg-primary px-4 py-2 text-primary-foreground">
          Add Role
        </button>
      </PageHeader>
      <DataTable 
        columns={[
          'Role ID',
          'Name',
          'Users',
          'Permissions',
          'Created',
          'Actions'
        ]} 
      />
    </div>
  )
}
