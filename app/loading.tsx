export default function Loading() {
  return (
    <div className="space-y-4">
      <div className="h-8 w-[200px] animate-pulse rounded bg-muted" />
      <div className="space-y-2">
        <div className="h-10 animate-pulse rounded bg-muted" />
        <div className="h-10 animate-pulse rounded bg-muted" />
        <div className="h-10 animate-pulse rounded bg-muted" />
      </div>
    </div>
  )
}
