import Github from '@/assets/icons/Github'
import Facebook from '@/assets/icons/Facebook'
import Twitter from '@/assets/icons/Twitter'
import LinkedIn from '@/assets/icons/LinkedIn'
import RSSFeed from '@/assets/icons/RSSFeed'

export default function Follow() {
  return (
    <div className="relative">
      <h3 className="absolute top-0 left-6 -translate-y-1/2 rounded-lg border border-gray-600 bg-gray-900 px-6 py-2">
        Tags
      </h3>
      <div className="rounded-2xl border border-gray-600 px-6 pt-11 pb-6">
        <div className="flex flex-col items-start gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-800">
              <Github className="text-gray-300" />
            </div>
            <span>github.com/dangminhngo</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-800">
              <Facebook className="text-[#1877f2]" />
            </div>
            <span>facebook.com/dangminhngo</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-800">
              <Twitter className="text-[#1da1f2]" />
            </div>
            <span>twitter.com/dangminhngo</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-800">
              <LinkedIn className="text-[#0077b5]" />
            </div>
            <span>linkedin.com/dangminhngo</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-800">
              <RSSFeed className="text-[#f69537]" />
            </div>
            <span>RSS Feed</span>
          </a>
        </div>
      </div>
    </div>
  )
}
