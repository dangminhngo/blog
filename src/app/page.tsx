import ArticleList from '@/components/ArticleList'
import TagCarousel from '@/components/TagCarousel'
import Sidebar from '@/components/Sidebar'

import { tags, frontmatters } from '@/lib/mock'

export default function Home() {
  return (
    <div className="mx-auto mt-[44px] mb-16 w-320 space-y-32">
      <TagCarousel tags={tags} />
      <div className="flex items-start gap-10">
        <ArticleList frontmatters={frontmatters} />
        <Sidebar tags={tags} />
      </div>
    </div>
  )
}
