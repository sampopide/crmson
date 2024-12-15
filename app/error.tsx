'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="rounded bg-primary px-4 py-2 text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
