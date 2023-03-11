'use client'
import { useRef, useReducer } from 'react'
import Link from 'next/link'

import SocialIcons from '@/components/SocialIcons'
import Logo from '@/assets/images/Logo'
import Nav from './Nav'
import { useScrollOver } from '@/hooks'
import reducer, { initialState } from '@/state/reducer'
import { AppContext, AppDispatchContext } from '@/contexts/AppContext'

export default function Header() {
  const ref = useRef(null)
  const scrollOverStaticNav = useScrollOver(ref, 100)
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        <header className="relative px-4 py-10 xl:px-0">
          <div
            ref={ref}
            className="mx-auto flex h-[4.5rem] w-full items-center justify-between rounded-2xl bg-gray-800 px-12 xl:w-320"
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
        </header>
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  )
}
