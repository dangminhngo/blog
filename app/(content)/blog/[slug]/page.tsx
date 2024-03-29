import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import siteConfig from '@/config/site'
import { getAllPosts, getAuthors, getPost } from '@/lib/content'
import { absoluteUrl, formatDate } from '@/lib/helpers'
import { getTableOfContents } from '@/lib/toc'
import AuthorProfile from '@/components/author-profile'
import Comments from '@/components/comments'
import Mdx from '@/components/mdx'
import TableOfContents from '@/components/table-of-contents'
import AspectRatio from '@/components/ui/aspect-ratio'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slugAsParams }))
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = getPost(params.slug)

  if (!post) return {}

  const url = process.env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set('heading', post.title)
  ogUrl.searchParams.set('type', siteConfig.name)
  ogUrl.searchParams.set('mode', 'light')

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = getPost(params.slug)

  if (!post) return notFound()

  const authors = getAuthors(post.authors)
  const toc = await getTableOfContents(post.body.raw)

  return (
    <div className="mx-auto max-w-2xl py-24">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between text-sm">
          <time
            dateTime={post.date}
            className="text-slate-500 dark:text-slate-400"
          >
            <span className="hidden sm:inline">Published on</span>{' '}
            {formatDate(post.date, 'LLL dd, yyyy')}
          </time>
          <div className="text-slate-500 dark:text-slate-400">
            Tags:{' '}
            <strong className="font-medium text-slate-700 dark:text-slate-200">
              {post.tags.join(', ')}
            </strong>
          </div>
        </div>
        <h1 className="text-4xl font-bold leading-tight tracking-tighter">
          {post.title}
        </h1>
        <div className="flex items-center gap-4">
          {authors.map((author) => (
            <AuthorProfile key={author.name} {...author} />
          ))}
        </div>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={post.image}
            alt={post.title}
            width={768}
            height={432}
            className="rounded-lg border border-slate-200 dark:border-slate-700"
          />
        </AspectRatio>
        <TableOfContents toc={toc} />
      </div>
      <Mdx code={post.body.code} />
      <div className="mt-12">
        <Comments />
      </div>
    </div>
  )
}
