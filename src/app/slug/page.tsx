import MainLayout from '../MainLayout'
import Front from './Front'
import { frontmatters } from '@/lib/mock'
import { Article } from '@/types'
import Excerpt from './Excerpt'
import Body from './Body'
import Comments from './Comments'
import Related from './Related'
import ArticleNav from './ArticleNav'

export interface ArticlePostProps {
  params: { slug: string }
}

export default function ArticlePost() {
  const { frontmatter, body } = {
    frontmatter: frontmatters[0],
    body: 'skldjflsakdjflkasdf',
  } as Article

  return (
    <MainLayout>
      <div className="space-y-12">
        <Front frontmatter={frontmatter} />
        <Excerpt excerpt={frontmatter.excerpt} />
        <Body tags={frontmatter.tags} body={body} />
        <Comments />
        <Related frontmatters={frontmatters} />
        <ArticleNav prev={frontmatters[0]} next={frontmatters[1]} />
      </div>
    </MainLayout>
  )
}
