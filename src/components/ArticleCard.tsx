import Image from 'next/image'
import Link from 'next/link'
import { Frontmatter } from '@/types'
import HashTagGrid from './HashTagGrid'
import ChevronsRight from '@/assets/icons/ChevronsRight'
import AuthorProfile from './AuthorProfile'

export interface ArticleCardProps {
  frontmatter: Frontmatter
}

export default function ArticleCard({
  frontmatter: { id, title, slug, tags, date, excerpt, cover, author, readingTime },
}: ArticleCardProps) {
  return (
    <div
      className="flex items-center justify-between gap-12 rounded-2xl bg-gray-800 p-6"
      data-id={id}
    >
      <div className="relative h-[400px] min-w-[300px] overflow-hidden rounded-2xl">
        <Image src={cover} alt={title} fill={true} />
      </div>
      <div className="flex flex-col items-stretch gap-6">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <HashTagGrid tags={tags} />
          <div className="flex items-center gap-2">
            <span>{date}</span>
            <span className="block h-2 w-2 rounded-full bg-red-400">&nbsp;</span>
            <span>{readingTime}</span>
          </div>
        </div>
        <Link href={`/${slug}`}>
          <h3 className="text-2xl font-bold leading-snug">{title}</h3>
        </Link>
        <p className="max-h-[117px] overflow-hidden text-ellipsis leading-relaxed">{excerpt}</p>
        <div className="flex items-center justify-between">
          <Link
            href={`/${slug}`}
            className="flex items-center gap-2 rounded-lg bg-gray-900 py-2 px-6 font-medium"
          >
            <span>Continue Reading</span> <ChevronsRight className="h-4 w-4" />
          </Link>
          <AuthorProfile {...author} />
        </div>
      </div>
    </div>
  )
}
