import { Frontmatter } from '@/types'
import ArticleCard from './ArticleCard'

export interface ArticleListProps {
  frontmatters: Frontmatter[]
}

export default function ArticleList({ frontmatters }: ArticleListProps) {
  return (
    <div className="space-y-16">
      {frontmatters.map((frontmatter) => (
        <ArticleCard key={frontmatter.id} frontmatter={frontmatter} />
      ))}
    </div>
  )
}
