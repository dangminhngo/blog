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
      <div className="mx-auto flex h-[4.5rem] w-320 items-center justify-between rounded-2xl bg-gray-800 px-12">
        <Link href="/" className="flex-1 justify-start">
          <Logo />
        </Link>
        <Nav />
        <div className="flex flex-1 items-center justify-end gap-6">
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
