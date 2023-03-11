import Image from 'next/image'
import { Frontmatter } from '@/types'
import HashTagGrid from './HashTagGrid'
import Link from 'next/link'

export interface ArticleMiniCardProps {
  frontmatter: Frontmatter
}

export default function ArticleMiniCard({
  frontmatter: { id, title, slug, tags, date, readingTime, cover },
}: ArticleMiniCardProps) {
  return (
    <div className="flex items-center gap-4" data-id={id}>
      <div className="relative h-[120px] min-w-[90px] overflow-hidden rounded-lg">
        <Image src={cover} alt={title} fill={true} />
      </div>
      <div className="flex flex-col items-stretch gap-2 text-sm text-gray-300">
        <HashTagGrid tags={tags} />
        <Link href={`/${slug}`} className="group text-base font-bold text-gray-200">
          <p className="inline bg-gradient-to-r from-accent-300 to-accent-500 bg-[length:0_1px] bg-[0_100%] bg-no-repeat leading-snug duration-500 group-hover:bg-[length:100%_1px]">
            {title}
          </p>
        </Link>
        <div className="flex items-center gap-2">
          <span>{date}</span>
          <span className="block h-2 w-2 rounded-full bg-red-400">&nbsp;</span>
          <span>{readingTime}</span>
        </div>
      </div>
    </div>
  )
}
