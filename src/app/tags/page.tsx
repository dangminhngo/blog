import { tags } from '@/lib/mock'
import TagCard from '@/components/TagCard'
import Sidebar from '@/components/Sidebar'

export default function Tags() {
  return (
    <div className="mx-auto mt-[44px] mb-16 flex w-320 gap-10">
      <div className="grid w-2/3 grid-cols-2 grid-rows-[minmax(min-content,max-content)] gap-10">
        {tags.map((t) => (
          <TagCard key={t.id} tag={t} />
        ))}
      </div>
      <Sidebar tags={tags} />
    </div>
  )
}
