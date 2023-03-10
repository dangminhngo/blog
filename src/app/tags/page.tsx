import { tags } from '@/lib/mock'
import TagCard from '@/components/TagCard'
import MainLayout from '../MainLayout'

export default function Tags() {
  return (
    <MainLayout>
      <div className="grid w-2/3 grid-cols-2 grid-rows-[minmax(min-content,max-content)] gap-10">
        {tags.map((t) => (
          <TagCard key={t.id} tag={t} />
        ))}
      </div>
    </MainLayout>
  )
}
