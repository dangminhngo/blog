import { Tag } from '@/types'
import HashTag from './HashTag'

export interface TagsCloudProps {
  tags: Tag[]
}

export default function TagsCloud({ tags }: TagsCloudProps) {
  return (
    <div className="relative">
      <h3 className="absolute top-0 left-6 -translate-y-1/2 rounded-lg border border-gray-600 bg-gray-900 px-6 py-2">
        Tags
      </h3>
      <div className="rounded-2xl border border-gray-600 px-6 pt-11 pb-6">
        <div className="flex flex-wrap items-start gap-6">
          {tags.map((tag) => (
            <HashTag key={tag.id} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}
