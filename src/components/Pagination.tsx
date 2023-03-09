import Link from 'next/link'

export default function Pagination() {
  return (
    <div className="flex items-center justify-between font-medium">
      <Link href="/" className="pointer-events-none rounded bg-gray-800 px-6 py-1 text-gray-600">
        Prev
      </Link>
      <div>Page 1 of 3</div>
      <Link href="/" className="rounded border border-accent-400 px-6 py-1 text-accent-400">
        Next
      </Link>
    </div>
  )
}
