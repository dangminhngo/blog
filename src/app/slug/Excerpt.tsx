export default function Excerpt({ excerpt }: { excerpt: string }) {
  return <div className="rounded-2xl border border-gray-600 p-12 leading-relaxed">{excerpt}</div>
}
