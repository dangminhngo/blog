import Link from 'next/link'
import { Tag } from '@/types'

export interface HashTagProps {
  tag: Tag
}

export default function HashTag({ tag }: HashTagProps) {
  return (
    <Link href={`/tags/${tag.name}`} className="group">
      <p
        className="inline bg-[length:0_1px] bg-[0_100%] bg-no-repeat duration-300 group-hover:bg-[length:100%_1px]"
        style={{ backgroundImage: `linear-gradient(${tag.color})` }}
      >
        <span style={{ color: tag.color }}>#</span>
        <span>{tag.name}</span>
      </p>
    </Link>
  )
}
