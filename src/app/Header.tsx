'use client'
import { useRef } from 'react'
import Link from 'next/link'

import MagnifyingGlass from '@/assets/icons/MagnifyingGlass'
import SocialIcons from '@/components/SocialIcons'
import Logo from '@/assets/images/Logo'
import Nav from './Nav'
import { toggleMobileNav, toggleSearchModal } from '@/state/actions'
import { useScrollOver, useAppSelect, useAppDispatch } from '@/hooks'
import MobileNav from './MobileNav'

export default function Header() {
  const ref = useRef(null)
  const scrollOverStaticNav = useScrollOver(ref, 100)
  const state = useAppSelect()
  const dispatch = useAppDispatch()
  const _toggleMobileNav = () => dispatch(toggleMobileNav())
  const _toggleSearchModal = () => dispatch(toggleSearchModal())

  return (
    <>
      <header className="relative px-4 py-10 xl:px-0">
        <div
          ref={ref}
          className="mx-auto hidden h-[4.5rem] w-full items-center justify-between rounded-2xl bg-gray-800 px-12 md:flex xl:w-320"
        >
          <Link href="/" className="flex-1 justify-start">
            <Logo />
          </Link>
          <Nav />
          <div className="hidden flex-1 lg:block">
            <SocialIcons />
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 ${
            scrollOverStaticNav ? 'translate-y-0' : '-translate-y-full'
          } z-50 hidden w-full border-b border-gray-700 bg-gray-800 px-4 shadow-xl delay-100 duration-200 md:block xl:px-0`}
        >
          <div className="mx-auto flex h-[4.5rem] w-full items-center justify-between xl:w-320">
            <Link href="/" className="flex-1 justify-start">
              <Logo />
            </Link>
            <Nav />
          </div>
        </div>
        <div className="flex h-[4.5rem] w-full items-center justify-between rounded-2xl bg-gray-800 px-4 md:hidden">
          <button className="p-2 outline-none" onClick={_toggleMobileNav}>
            <div className="relative aspect-[1/1] w-5">
              <span
                className={`absolute top-0 ${
                  state.mobileNavShow ? 'translate-y-[9px] rotate-45' : 'rotate-0'
                } block h-0.5 w-full bg-gray-200 duration-300`}
              >
                &nbsp;
              </span>
              <span
                className={`absolute top-[9px] ${
                  state.mobileNavShow ? '-translate-x-1/2 opacity-0' : 'opacity-1 -translate-x-0'
                } block h-0.5 w-full bg-gray-200 duration-300`}
              >
                &nbsp;
              </span>
              <span
                className={`absolute top-[18px] ${
                  state.mobileNavShow ? '-translate-y-[9px] -rotate-45' : 'rotate-0'
                } block h-0.5 w-full bg-gray-200 duration-300`}
              >
                &nbsp;
              </span>
            </div>
          </button>
          <Link href="/">
            <Logo />
          </Link>
          <button className="p-2 outline-none" onClick={_toggleSearchModal}>
            <MagnifyingGlass />
          </button>
        </div>
      </header>
      <MobileNav />
    </>
  )
}
