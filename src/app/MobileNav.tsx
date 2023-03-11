import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { toggleMobileNav } from '@/state/actions'
import { useAppSelect, useAppDispatch } from '@/hooks'

export default function MobileNav() {
  const [mounted, setMounted] = useState(false)
  const mobileNavShow = useAppSelect((state) => state?.mobileNavShow)
  const dispatch = useAppDispatch()
  const _toggleMobileNav = () => dispatch(toggleMobileNav())

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mobileNavShow) {
      document.body.style.overflow = 'hidden'
      return
    }

    document.body.style.overflow = 'auto'
  }, [mobileNavShow])

  function closeMobileNav(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation()
    _toggleMobileNav()
  }

  return mobileNavShow && mounted
    ? createPortal(
        <div className="fixed inset-0 z-50 block bg-gray-900/50 md:hidden" onClick={closeMobileNav}>
          <nav className="absolute z-10 h-full w-64 bg-gray-700 p-4 text-lg">
            <ul className="flex flex-col items-stretch">
              <li>
                <Link href="/" className="block px-6 py-4">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tags" className="block px-6 py-4">
                  #Tags
                </Link>
              </li>
              <li>
                <Link href="/about" className="block px-6 py-4">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block px-6 py-4">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>,
        document.getElementById('mobile-nav') as HTMLDivElement
      )
    : null
}
