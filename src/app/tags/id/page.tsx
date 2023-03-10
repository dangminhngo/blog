import TagBoard from '@/components/TagBoard'
import ArticleList from '@/components/ArticleList'
import Sidebar from '@/components/Sidebar'

import { tags, frontmatters } from '@/lib/mock'

export default function ArticlesByTag() {
  return (
    <div className="mx-auto mt-[44px] mb-16 w-320 space-y-32">
      <TagBoard tag={tags[0]} />
      <div className="flex items-start gap-10">
        <ArticleList frontmatters={frontmatters} />
        <Sidebar tags={tags} />
      </div>
    </div>
  )
}
