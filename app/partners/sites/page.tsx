import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function PartnerSites() {
  return (
    <div className="space-y-4">
      <PageHeader title="Partner Sites">
        <button className="rounded bg-primary px-4 py-2 text-primary-foreground">
          Add Site
        </button>
      </PageHeader>
      <DataTable 
        columns={[
          'Site ID',
          'URL',
          'Partner',
          'Traffic',
          'Status',
          'Actions'
        ]} 
      />
    </div>
  )
}
