import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function UsersList() {
  return (
    <div className="space-y-4">
      <PageHeader title="Users">
        <button className="rounded bg-primary px-4 py-2 text-primary-foreground">
          Add User
        </button>
      </PageHeader>
      <DataTable 
        columns={[
          'User ID',
          'Name',
          'Email',
          'Role',
          'Status',
          'Last Active'
        ]} 
      />
    </div>
  )
}
