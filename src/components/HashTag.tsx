import Link from 'next/link'
import { Tag } from '@/types'

export interface HashTagProps {
  tag: Tag
}

export default function HashTag({ tag }: HashTagProps) {
  return (
    <Link href={`/tags/${tag.name}`}>
      <span style={{ color: tag.color }}>#</span>
      <span>{tag.name}</span>
    </Link>
  )
}
