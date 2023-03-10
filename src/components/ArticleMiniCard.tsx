import Image from 'next/image'
import { Frontmatter } from '@/types'
import HashTagGrid from './HashTagGrid'

export interface ArticleMiniCardProps {
  frontmatter: Frontmatter
}

export default function ArticleMiniCard({
  frontmatter: { id, title, tags, date, readingTime, cover },
}: ArticleMiniCardProps) {
  return (
    <div className="flex items-center gap-4" data-id={id}>
      <div className="relative h-[160px] min-w-[120px] overflow-hidden rounded-lg">
        <Image src={cover} alt={title} fill={true} />
      </div>
      <div className="space-y-3 text-sm text-gray-300">
        <HashTagGrid tags={tags} />
        <h3 className="text-lg font-bold text-gray-200 leading-snug">{title}</h3>
        <div className="flex items-center gap-2">
          <span>{date}</span>
          <span className="block h-2 w-2 rounded-full bg-red-400">&nbsp;</span>
          <span>{readingTime}</span>
        </div>
      </div>
    </div>
  )
}
