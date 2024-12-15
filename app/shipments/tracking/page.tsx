import { PageHeader } from '@/components/ui/page-header'
import { DataTable } from '@/components/ui/data-table'

export default function TrackingCargo() {
  return (
    <div className="space-y-4">
      <PageHeader title="Tracking Cargo" />
      <div className="rounded-lg border p-4 mb-4">
        <div className="flex gap-4">
          <input
            type="text"
            className="flex-1 rounded-md border px-3 py-2"
            placeholder="Enter tracking number..."
          />
          <button
            className="rounded bg-primary px-4 py-2 text-primary-foreground"
          >
            Track
          </button>
        </div>
      </div>
      <DataTable 
        columns={[
          'Tracking ID',
          'Location',
          'Status',
          'Update Time',
          'Next Stop'
        ]} 
      />
    </div>
  )
}
