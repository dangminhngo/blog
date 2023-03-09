import { tags } from '@/lib/mock'
import TagCard from '@/components/TagCard'
import About from '@/components/About'
import Follow from '@/components/Follow'
import TagsCloud from '@/components/TagsCloud'

export default function Tags() {
  return (
    <div className="mx-auto mt-[44px] mb-16 flex w-320 gap-10">
      <div className="grid w-2/3 grid-cols-2 grid-rows-[minmax(min-content,max-content)] gap-10">
        {tags.map((t) => (
          <TagCard key={t.id} {...t} />
        ))}
      </div>
      <aside className="w-1/3 space-y-[68px]">
        <About />
        <Follow />
        <TagsCloud tags={tags} />
      </aside>
    </div>
  )
}
