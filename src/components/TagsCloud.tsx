import { Tag } from '@/types'
import HashTagGrid from './HashTagGrid'
import Cloud from './Cloud'

export interface TagsCloudProps {
  tags: Tag[]
}

export default function TagsCloud({ tags }: TagsCloudProps) {
  return (
    <Cloud title="Tags">
      <HashTagGrid tags={tags} />
    </Cloud>
  )
}
