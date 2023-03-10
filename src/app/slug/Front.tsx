import Image from 'next/image'
import Link from 'next/link'
import HashTagGrid from '@/components/HashTagGrid'
import AuthorProfile from '@/components/AuthorProfile'
import { Frontmatter } from '@/types'

export interface FrontProps {
  frontmatter: Frontmatter
}

export default function Front({
  frontmatter: { id, title, slug, tags, date, updated, cover, author, readingTime },
}: FrontProps) {
  return (
    <div className="flex items-center justify-between gap-8 rounded-2xl" data-id={id}>
      <div className="relative h-[400px] min-w-[300px] overflow-hidden rounded-2xl">
        <Image src={cover} alt={title} fill={true} />
      </div>
      <div className="flex flex-col items-stretch gap-8">
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
        <div className="flex items-center justify-between text-sm text-gray-400">
          <AuthorProfile author={author} />
          <p>
            <strong>Last Updated:</strong> <span>{updated}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
