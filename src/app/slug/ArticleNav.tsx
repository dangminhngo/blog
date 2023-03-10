import ArticleMiniCard from '@/components/ArticleMiniCard'
import Cloud from '@/components/Cloud'
import ArrowLeft from '@/assets/icons/ArrowLeft'
import ArrowRight from '@/assets/icons/ArrowRight'
import { Frontmatter } from '@/types'

export interface ArticleNavProps {
  prev: Frontmatter
  next: Frontmatter
}

export default function ArticleNav({ prev, next }: ArticleNavProps) {
  return (
    <div className="flex items-start gap-10">
      <Cloud title="Previous Article">
        <ArticleMiniCard frontmatter={prev} />
        <button className="absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-full items-center justify-center rounded-full border-[1px] border-gray-600 bg-gray-900 outline-none">
          <ArrowLeft />
        </button>
      </Cloud>
      <Cloud title="Next Article" rightSide>
        <ArticleMiniCard frontmatter={next} />
        <button className="absolute top-1/2 right-0 z-10 flex h-10 w-10 translate-x-1/2 -translate-y-full items-center justify-center rounded-full border-[1px] border-gray-600 bg-gray-900 outline-none">
          <ArrowRight />
        </button>
      </Cloud>
    </div>
  )
}
