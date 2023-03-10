import { Tag } from '@/types'

export interface TagCardProps {
  tag: Tag
}

export default function TagCard({
  tag: { id, color, name, description, numOfArticles },
}: TagCardProps) {
  return (
    <div data-id={id}>
      <div
        className="relative flex flex-col items-center gap-6 rounded-lg border-[1px] bg-gray-800 px-6 pt-11 pb-6"
        style={{ borderColor: color }}
      >
        <h6
          style={{ backgroundColor: color }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg py-2 px-10 text-lg text-gray-900"
        >
          # {name}
        </h6>
        <p className="text-center leading-relaxed">{description}</p>
        <p className="flex items-center gap-2">
          {numOfArticles}
          <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: color }}>
            &nbsp;
          </span>
          articles
        </p>
      </div>
    </div>
  )
}
