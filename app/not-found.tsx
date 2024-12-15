import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-4">Could not find requested resource</p>
        <Link
          href="/"
          className="rounded bg-primary px-4 py-2 text-primary-foreground"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
