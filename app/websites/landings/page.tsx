import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function Landings() {
  return (
    <div className="space-y-4">
      <PageHeader title="Landing Pages">
        <button className="rounded bg-primary px-4 py-2 text-primary-foreground">
          Add Landing Page
        </button>
      </PageHeader>
      <DataTable 
        columns={[
          'Page ID',
          'URL',
          'Campaign',
          'Conversions',
          'Status',
          'Actions'
        ]} 
      />
    </div>
  )
}
