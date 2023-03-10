'use client'
import { useRef } from 'react'
import Link from 'next/link'

import SocialIcons from '@/components/SocialIcons'
import Logo from '@/assets/images/Logo'
import Nav from './Nav'
import { useScrollOver } from '@/hooks'

export default function Header() {
  const ref = useRef(null)
  const scrollOverStaticNav = useScrollOver(ref, 100)

  return (
    <header className="relative py-10">
      <div
        ref={ref}
        className="mx-auto flex h-[4.5rem] w-320 items-center justify-between rounded-2xl bg-gray-800 px-12"
      >
        <Link href="/" className="flex-1 justify-start">
          <Logo />
        </Link>
        <Nav />
        <SocialIcons />
      </div>
      <div
        className={`fixed top-0 left-0 ${
          scrollOverStaticNav ? 'translate-y-0' : '-translate-y-full'
        } z-50 w-full bg-gray-800 shadow-xl delay-100 duration-200`}
      >
        <div className="mx-auto flex h-[4.5rem] w-320 items-center justify-between">
          <Link href="/" className="flex-1 justify-start">
            <Logo />
          </Link>
          <Nav />
        </div>
      </div>
    </header>
  )
}
