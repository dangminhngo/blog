import Cloud from '@/components/Cloud'
import { Frontmatter } from '@/types'
import ArticleMiniCard from '@/components/ArticleMiniCard'

export interface RelatedProps {
  frontmatters: Frontmatter[]
}

export default function Related({ frontmatters }: RelatedProps) {
  return (
    <Cloud title="Related articles">
      <div className="grid grid-cols-2 gap-10">
        {frontmatters.map((f) => (
          <ArticleMiniCard key={f.id} frontmatter={f} />
        ))}
      </div>
    </Cloud>
  )
}
