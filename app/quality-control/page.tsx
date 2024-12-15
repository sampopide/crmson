import { PageHeader } from '@/components/ui/page-header'
import { Card } from '@/components/ui/card'

export default function QualityControl() {
  return (
    <div className="space-y-4">
      <PageHeader title="Quality Control" />
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-4">
          <h3 className="font-semibold">Quality Metrics</h3>
          <div className="mt-4 h-[200px] animate-pulse rounded bg-muted" />
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Recent Reviews</h3>
          <div className="mt-4 h-[200px] animate-pulse rounded bg-muted" />
        </Card>
      </div>
    </div>
  )
}
