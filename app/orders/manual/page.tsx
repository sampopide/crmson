import { PageHeader } from '@/components/ui/page-header'

export default function ManualOrder() {
  return (
    <div className="space-y-4">
      <PageHeader title="Create Manual Order" />
      <div className="rounded-lg border p-4">
        <form className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Customer</label>
              <input
                type="text"
                className="w-full rounded-md border px-3 py-2"
                placeholder="Search customer..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Product</label>
              <input
                type="text"
                className="w-full rounded-md border px-3 py-2"
                placeholder="Search product..."
              />
            </div>
          </div>
          <button
            type="submit"
            className="rounded bg-primary px-4 py-2 text-primary-foreground"
          >
            Create Order
          </button>
        </form>
      </div>
    </div>
  )
}
