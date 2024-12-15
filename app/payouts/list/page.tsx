import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function PayoutsList() {
  return (
    <div className="space-y-4">
      <PageHeader title="Payouts">
        <button className="rounded bg-primary px-4 py-2 text-primary-foreground">
          New Payout
        </button>
      </PageHeader>
      <DataTable 
        columns={[
          'Payout ID',
          'Partner',
          'Amount',
          'Status',
          'Date',
          'Actions'
        ]} 
      />
    </div>
  )
}
