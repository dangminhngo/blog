import ArticleList from '@/components/ArticleList'
import TagCarousel from '@/components/TagCarousel'
import MainLayout from './MainLayout'

import { tags, frontmatters } from '@/lib/mock'

export default function Home() {
  return (
    <MainLayout feature={<TagCarousel tags={tags} />}>
      <ArticleList frontmatters={frontmatters} />
    </MainLayout>
  )
}
