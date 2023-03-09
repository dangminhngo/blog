import TagCarousel from '@/components/TagCarousel'

const tags = [
  {
    id: 1,
    color: '#67e8f9',
    name: 'DevOps',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus enim in molestie lacinia. Nunc sit amet massa ornare, viverra odio a, imperdiet sapien',
    numOfArticles: 2,
  },
  {
    id: 2,
    color: '#f0db4f',
    name: 'JavaScript',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus enim in molestie lacinia. Nunc sit amet massa ornare, viverra odio a, imperdiet sapien',
    numOfArticles: 5,
  },
  {
    id: 3,
    color: '#fff',
    name: 'Next.js',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus enim in molestie lacinia. Nunc sit amet massa ornare, viverra odio a, imperdiet sapien',
    numOfArticles: 4,
  },
]

export default function Home() {
  return (
    <main>
      <div className="mt-[44px] mx-auto mb-16 w-320">
        <div></div>
        <TagCarousel tags={tags} />
      </div>
    </main>
  )
}
