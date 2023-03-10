import HashTagGrid from '@/components/HashTagGrid'
import SocialIcons from '@/components/SocialIcons'
import { Tag } from '@/types'
import Subscribe from '../Subscribe'

export default function Body({ tags, body }: { tags: Tag[]; body: string }) {
  return (
    <div className="relative min-h-[400px] rounded-2xl bg-gray-800 p-12 leading-relaxed">
      <div className="absolute top-12 left-0 -translate-x-1/2 rounded-full border border-gray-600 bg-gray-700 px-3 py-4">
        <SocialIcons col />
      </div>
      <div>{body}</div>
      <div className="mt-12 flex justify-center gap-4">
        <strong>Categorized in:</strong>
        <HashTagGrid tags={tags} />
      </div>
      <div className="mt-8 flex flex-col items-center gap-4 border-t border-gray-600 pt-8">
        <h3 className="text-lg font-semibold">Like what you read?</h3>
        <Subscribe />
      </div>
    </div>
  )
}
