import ArticleList from '@/components/ArticleList'
import TagCarousel from '@/components/TagCarousel'
import About from '@/components/About'
import Follow from '@/components/Follow'
import TagsCloud from '@/components/TagsCloud'

const tags = [
  {
    id: '1',
    color: '#67e8f9',
    name: 'DevOps',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus enim in molestie lacinia. Nunc sit amet massa ornare, viverra odio a, imperdiet sapien',
    numOfArticles: 2,
  },
  {
    id: '2',
    color: '#f0db4f',
    name: 'JavaScript',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus enim in molestie lacinia. Nunc sit amet massa ornare, viverra odio a, imperdiet sapien',
    numOfArticles: 5,
  },
  {
    id: '3',
    color: '#fff',
    name: 'Next.js',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus enim in molestie lacinia. Nunc sit amet massa ornare, viverra odio a, imperdiet sapien',
    numOfArticles: 4,
  },
]

const frontmatters = [
  {
    id: '1',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-donec-eget',
    tags,
    date: '2023-03-08',
    updated: '2023-03-09',
    readingTime: '1 min read',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue arcu mi, egestas tincidunt nulla sollicitudin nec. Proin sit amet urna neque. Nullam interdum purus lorem, eu ornare ex elementum id. Phasellus ligula arcu, tempor at tincidunt eget, tincidunt sit amet orci. Curabitur tincidunt interdum urna, a blandit urna fermentum et. Phasellus fermentum quam sit amet lacus auctor dictum.',
    cover: 'https://p-hold.com/300/400',
    author: {
      id: '1',
      name: 'Dang Minh Ngo',
      image: 'https://p-hold.com/40/40',
    },
  },
  {
    id: '2',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-donec-eget',
    tags,
    date: '2023-03-08',
    updated: '2023-03-09',
    readingTime: '1 min read',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue arcu mi, egestas tincidunt nulla sollicitudin nec. Proin sit amet urna neque. Nullam interdum purus lorem, eu ornare ex elementum id. Phasellus ligula arcu, tempor at tincidunt eget, tincidunt sit amet orci. Curabitur tincidunt interdum urna, a blandit urna fermentum et. Phasellus fermentum quam sit amet lacus auctor dictum.',
    cover: 'https://p-hold.com/300/400',
    author: {
      id: '1',
      name: 'Dang Minh Ngo',
      image: 'https://p-hold.com/40/40',
    },
  },
  {
    id: '3',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-donec-eget',
    tags,
    date: '2023-03-08',
    updated: '2023-03-09',
    readingTime: '1 min read',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue arcu mi, egestas tincidunt nulla sollicitudin nec. Proin sit amet urna neque. Nullam interdum purus lorem, eu ornare ex elementum id. Phasellus ligula arcu, tempor at tincidunt eget, tincidunt sit amet orci. Curabitur tincidunt interdum urna, a blandit urna fermentum et. Phasellus fermentum quam sit amet lacus auctor dictum.',
    cover: 'https://p-hold.com/300/400',
    author: {
      id: '1',
      name: 'Dang Minh Ngo',
      image: 'https://p-hold.com/40/40',
    },
  },
  {
    id: '4',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-donec-eget',
    tags,
    date: '2023-03-08',
    updated: '2023-03-09',
    readingTime: '1 min read',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue arcu mi, egestas tincidunt nulla sollicitudin nec. Proin sit amet urna neque. Nullam interdum purus lorem, eu ornare ex elementum id. Phasellus ligula arcu, tempor at tincidunt eget, tincidunt sit amet orci. Curabitur tincidunt interdum urna, a blandit urna fermentum et. Phasellus fermentum quam sit amet lacus auctor dictum.',
    cover: 'https://p-hold.com/300/400',
    author: {
      id: '1',
      name: 'Dang Minh Ngo',
      image: 'https://p-hold.com/40/40',
    },
  },
]

export default function Home() {
  return (
    <main>
      <div className="mx-auto mt-[44px] mb-16 w-320 space-y-32">
        <TagCarousel tags={tags} />
        <div className="flex items-start gap-10">
          <ArticleList frontmatters={frontmatters} />
          <aside className="min-w-[400px] space-y-[68px] pt-5">
            <About />
            <Follow />
            <TagsCloud tags={tags} />
          </aside>
        </div>
      </div>
    </main>
  )
}
