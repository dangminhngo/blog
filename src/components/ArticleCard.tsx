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
      className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gray-800 p-6 md:flex-row lg:gap-12"
      data-id={id}
    >
      <div className="relative aspect-[2/1] min-w-full overflow-hidden rounded-2xl md:aspect-[3/4] md:min-w-[240px] xl:min-w-[300px]">
        <Image
          src={cover}
          alt={title}
          fill={true}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className="flex flex-col items-stretch gap-6">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <HashTagGrid tags={tags} />
          <div className="flex items-center gap-2">
            <span>{date}</span>
            <span className="block h-2 w-2 rounded-full bg-red-400 md:hidden xl:block">&nbsp;</span>
            <span className="block md:hidden xl:block">{readingTime}</span>
          </div>
        </div>
        <Link href={`/${slug}`} className="group text-xl font-bold lg:text-2xl">
          <p className="inline bg-gradient-to-r from-accent-300 to-accent-500 bg-[length:0_2px] bg-[0_100%] bg-no-repeat leading-snug duration-500 group-hover:bg-[length:100%_2px]">
            {title}
          </p>
        </Link>
        <p className="max-h-[117px] overflow-hidden text-ellipsis leading-relaxed">{excerpt}</p>
        <div className="flex items-center justify-between">
          <Link
            href={`/${slug}`}
            className="flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 py-2 px-4 text-sm font-medium md:text-base"
          >
            <span>Continue Reading</span> <ChevronsRight className="h-4 w-4" />
          </Link>
          <div className="block text-sm md:hidden md:text-base xl:block">
            <AuthorProfile author={author} />
          </div>
        </div>
      </div>
    </div>
  )
}
