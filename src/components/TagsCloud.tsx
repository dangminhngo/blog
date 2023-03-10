import { Tag } from '@/types'
import HashTagGrid from './HashTagGrid'

export interface TagsCloudProps {
  tags: Tag[]
}

export default function TagsCloud({ tags }: TagsCloudProps) {
  return (
    <div className="relative">
      <h3 className="absolute top-0 left-6 -translate-y-1/2 rounded-lg border border-gray-600 bg-gray-900 px-6 py-2 font-semibold">
        Tags
      </h3>
      <div className="rounded-2xl border border-gray-600 px-6 pt-11 pb-6">
        <HashTagGrid tags={tags} />
      </div>
    </div>
  )
}
