import About from '@/components/About'
import Follow from '@/components/Follow'
import TagsCloud from '@/components/TagsCloud'
import { Tag } from '@/types'

export interface SidebarProps {
  tags: Tag[]
}

export default function Sidebar({ tags }: SidebarProps) {
  return (
    <aside className="w-1/3 space-y-[68px]">
      <About />
      <Follow />
      <TagsCloud tags={tags} />
    </aside>
  )
}
