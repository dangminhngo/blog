import Sidebar from '@/components/Sidebar'
import { tags } from '@/lib/mock'

export interface MainLayoutProps {
  feature?: React.ReactElement
  children: React.ReactNode
}

export default function MainLayout({ feature, children }: MainLayoutProps) {
  return (
    <div className="mx-auto mt-[44px] mb-16 w-full space-y-32 px-4 xl:w-320 xl:px-0">
      {feature && <div>{feature}</div>}
      <div className="flex gap-10">
        {children}
        <Sidebar tags={tags} />
      </div>
    </div>
  )
}
