import ArticleList from '@/components/ArticleList'
import Sidebar from '@/components/Sidebar'
import SearchBoard from './SearchBoard'
import { tags, frontmatters } from '@/lib/mock'

export interface SearchProps {
  params: { keyword: string }
}

export default function Search() {
  return (
    <div className="mx-auto mt-[44px] mb-16 w-320 space-y-32">
      <SearchBoard keyword={'javascript'} />
      <div className="flex items-start gap-10">
        <ArticleList frontmatters={frontmatters} />
        <Sidebar tags={tags} />
      </div>
    </div>
  )
}
