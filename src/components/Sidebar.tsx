import About from '@/components/About'
import Follow from '@/components/Follow'
import TagsCloud from '@/components/TagsCloud'
import { Tag } from '@/types'

export interface SidebarProps {
  tags: Tag[]
}

export default function Sidebar({ tags }: SidebarProps) {
  return (
    <aside className="min-w-[400px] max-w-[400px] space-y-[68px]">
      <About />
      <Follow />
      <TagsCloud tags={tags} />
    </aside>
  )
}
