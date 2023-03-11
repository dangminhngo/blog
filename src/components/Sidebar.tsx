import About from '@/components/About'
import Follow from '@/components/Follow'
import TagsCloud from '@/components/TagsCloud'
import { Tag } from '@/types'

export interface SidebarProps {
  tags: Tag[]
}

export default function Sidebar({ tags }: SidebarProps) {
  return (
    <aside className="hidden min-w-[320px] max-w-[320px] space-y-12 lg:block xl:min-w-[400px] xl:max-w-[400px]">
      <About />
      <Follow />
      <TagsCloud tags={tags} />
    </aside>
  )
}
