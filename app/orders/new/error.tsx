'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="rounded bg-primary px-4 py-2 text-primary-foreground"
      >
        Try again
      </button>
    </div>
  )
}
