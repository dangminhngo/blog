import { Tag } from '@/types'
import HashTag from './HashTag'

export interface HashTagGridProps {
  tags: Tag[]
}

export default function HashTagGrid({ tags }: HashTagGridProps) {
  return (
    <div className="flex flex-wrap items-start gap-[0.5em]">
      {tags.map((tag) => (
        <HashTag key={tag.id} tag={tag} />
      ))}
    </div>
  )
}
