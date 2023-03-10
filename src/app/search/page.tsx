import MainLayout from '../MainLayout'
import ArticleList from '@/components/ArticleList'
import SearchBoard from './SearchBoard'
import { frontmatters } from '@/lib/mock'

export interface SearchProps {
  params: { keyword: string }
}

export default function Search() {
  return (
    <MainLayout feature={<SearchBoard keyword={'javascript'} />}>
      <ArticleList frontmatters={frontmatters} />
    </MainLayout>
  )
}
