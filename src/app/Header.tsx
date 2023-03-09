import Link from 'next/link'

import Logo from '@/assets/images/Logo'
import Github from '@/assets/icons/Github'
import Facebook from '@/assets/icons/Facebook'
import Twitter from '@/assets/icons/Twitter'
import LinkedIn from '@/assets/icons/LinkedIn'
import RSSFeed from '@/assets/icons/RSSFeed'

import Nav from './Nav'

export default function Header() {
  return (
    <header className="py-10">
      <div className="mx-auto w-320 h-[4.5rem] px-12 flex items-center justify-between bg-gray-800 rounded-2xl">
        <Link href="/" className="flex-1 justify-start">
          <Logo />
        </Link>
        <Nav />
        <div className="flex-1 flex items-center justify-end gap-6">
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
      </div>
    </header>
  )
}
