import { Tag } from '@/types'
import ArrowLeft from '@/assets/icons/ArrowLeft'
import ArrowRight from '@/assets/icons/ArrowRight'

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
        <div key={t.id} className="">
          <div
            className="relative flex flex-col items-center gap-6 rounded-lg border-[1px] bg-gray-800 px-6 pt-11 pb-6"
            style={{ borderColor: t.color }}
          >
            <h6
              style={{ backgroundColor: t.color }}
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg py-2 px-10 text-xl text-gray-900"
            >
              # {t.name}
            </h6>
            <p className="text-center">{t.description}</p>
            <p className="flex items-center gap-2">
              {t.numOfArticles}
              <span className="inline-block h-2 w-2 rounded-full bg-red-400">&nbsp;</span>articles
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
