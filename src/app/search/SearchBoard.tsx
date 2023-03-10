export default function SearchBoard({ keyword }: { keyword: string }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-gray-600 bg-gray-800 px-12 py-16">
      <h1 className="text-2xl">
        Search results for: <strong>{keyword}</strong>
      </h1>
      <p className="flex items-center gap-2 text-lg">
        6<span className="inline-block h-2 w-2 rounded-full bg-red-400">&nbsp;</span>
        articles
      </p>
    </div>
  )
}
