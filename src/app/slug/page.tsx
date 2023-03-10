import Front from './Front'
import Sidebar from '@/components/Sidebar'
import { tags as allTags, frontmatters } from '@/lib/mock'
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
    <div className="mx-auto flex w-320 items-start gap-10 py-16">
      <div className="space-y-12">
        <Front frontmatter={frontmatter} />
        <Excerpt excerpt={frontmatter.excerpt} />
        <Body tags={frontmatter.tags} body={body} />
        <Comments />
        <Related frontmatters={frontmatters} />
        <ArticleNav prev={frontmatters[0]} next={frontmatters[1]} />
      </div>
      <Sidebar tags={allTags} />
    </div>
  )
}
