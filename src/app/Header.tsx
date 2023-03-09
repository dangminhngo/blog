import Link from 'next/link'

import Logo from '@/assets/images/Logo'
import SocialIcons from './SocialIcons'

import Nav from './Nav'

export default function Header() {
  return (
    <header className="py-10">
      <div className="mx-auto flex h-[4.5rem] w-320 items-center justify-between rounded-2xl bg-gray-800 px-12">
        <Link href="/" className="flex-1 justify-start">
          <Logo />
        </Link>
        <Nav />
        <SocialIcons />
      </div>
    </header>
  )
}
