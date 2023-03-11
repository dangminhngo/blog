import Github from '@/assets/icons/Github'
import Facebook from '@/assets/icons/Facebook'
import Twitter from '@/assets/icons/Twitter'
import LinkedIn from '@/assets/icons/LinkedIn'
import RSSFeed from '@/assets/icons/RSSFeed'

export default function SocialIcons({ col }: { col?: boolean }) {
  return (
    <div
      className={`flex ${col ? 'flex-col' : 'flex-row'} items-center justify-end ${
        col ? 'gap-4' : 'gap-6'
      }`}
    >
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <Github className="text-gray-300" />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <Facebook className="text-[#1877f2]" />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <Twitter className="text-[#1da1f2]" />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <LinkedIn className="text-[#0077b5]" />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <RSSFeed className="text-[#f69537]" />
      </a>
    </div>
  )
}
