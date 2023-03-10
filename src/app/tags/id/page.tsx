import TagBoard from '@/components/TagBoard'
import ArticleList from '@/components/ArticleList'
import MainLayout from '@/app/MainLayout'

import { tags, frontmatters } from '@/lib/mock'

export default function ArticlesByTag() {
  return (
    <MainLayout feature={<TagBoard tag={tags[0]} />}>
      <ArticleList frontmatters={frontmatters} />
    </MainLayout>
  )
}
