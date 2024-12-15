import { PageHeader } from '@/components/ui/page-header'

export default function AddProduct() {
  return (
    <div className="space-y-4">
      <PageHeader title="Add Product" />
      <div className="rounded-lg border p-4">
        <form className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Product Name</label>
              <input
                type="text"
                className="w-full rounded-md border px-3 py-2"
                placeholder="Product name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <input
                type="text"
                className="w-full rounded-md border px-3 py-2"
                placeholder="Category"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Price</label>
              <input
                type="number"
                className="w-full rounded-md border px-3 py-2"
                placeholder="0.00"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Stock</label>
              <input
                type="number"
                className="w-full rounded-md border px-3 py-2"
                placeholder="0"
              />
            </div>
          </div>
          <button
            type="submit"
            className="rounded bg-primary px-4 py-2 text-primary-foreground"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}
