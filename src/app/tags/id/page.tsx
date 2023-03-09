import TagBoard from '@/components/TagBoard'
import ArticleList from '@/components/ArticleList'
import About from '@/components/About'
import Follow from '@/components/Follow'
import TagsCloud from '@/components/TagsCloud'

import { tags, frontmatters } from '@/lib/mock'

export default function ArticlesByTag() {
  return (
    <div className="mx-auto mt-[44px] mb-16 w-320 space-y-32">
      <TagBoard
        id="1"
        color="#67e8f9"
        name="DevOps"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus enim in molestie lacinia. Nunc sit amet massa ornare, viverra odio a, imperdiet sapien"
        numOfArticles={2}
      />
      <div className="flex items-start gap-10">
        <ArticleList frontmatters={frontmatters} />
        <aside className="min-w-[400px] space-y-[68px] pt-5">
          <About />
          <Follow />
          <TagsCloud tags={tags} />
        </aside>
      </div>
    </div>
  )
}
