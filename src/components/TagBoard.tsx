import { Tag } from '@/types'

export interface TagBoardProps {
  tag: Tag
}

export default function TagBoard({
  tag: { id, color, name, description, numOfArticles },
}: TagBoardProps) {
  return (
    <div
      className="mx-auto flex w-[960px] items-center gap-16 rounded-2xl border p-8"
      style={{ borderColor: color }}
      data-id={id}
    >
      <div className="flex min-w-[320px] flex-col items-center gap-2">
        <h3 className="text-lg font-semibold">
          <span style={{ color }}>#</span> {name}
        </h3>
        <p className="flex items-center gap-2">
          {numOfArticles}
          <span className="inline-block h-2 w-2 rounded-full bg-red-400">&nbsp;</span>articles
        </p>
      </div>
      <div className="text-center leading-relaxed">{description}</div>
    </div>
  )
}
