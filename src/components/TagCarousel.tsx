import { Tag } from '@/types'
import ArrowLeft from '@/assets/icons/ArrowLeft'
import ArrowRight from '@/assets/icons/ArrowRight'
import TagCard from './TagCard'

export interface TagCarouselProps {
  tags: Tag[]
}

export default function TagCarousel({ tags }: TagCarouselProps) {
  return (
    <div className="relative flex items-center justify-between gap-10">
      <button className="absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1px] border-gray-600 bg-gray-900 outline-none">
        <ArrowLeft />
      </button>
      <button className="absolute top-1/2 right-0 z-10 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1px] border-gray-600 bg-gray-900 outline-none">
        <ArrowRight />
      </button>
      {tags.map((t) => (
        <TagCard key={t.id} tag={t} />
      ))}
    </div>
  )
}
