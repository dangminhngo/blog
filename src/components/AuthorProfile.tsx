import Image from 'next/image'
import { Author } from '@/types'

export interface AuthorProfileProps {
  author: Author
}

export default function AuthorProfile({ author: { id, name, image } }: AuthorProfileProps) {
  return (
    <div className="flex items-center gap-2" data-id={id}>
      <div className="relative h-[36px] w-[36px] overflow-hidden rounded-full border border-gray-600">
        <Image src={image} alt={name} fill={true} />
      </div>
      <span>{name}</span>
    </div>
  )
}
