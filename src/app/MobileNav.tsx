import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
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
    const app = document.getElementById('app')

    if (!app) return

    if (mobileNavShow) {
      document.body.style.overflow = 'hidden'
      app.style.transform = 'translateX(256px)'
    } else {
      document.body.style.overflow = 'auto'
      app.style.transform = 'translateX(0)'
    }
  }, [mobileNavShow])

  function closeMobileNav(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation()
    _toggleMobileNav()
  }

  return mounted
    ? createPortal(
        <AnimatePresence>
          {mobileNavShow && (
            <motion.div
              className="fixed inset-0 z-50 block bg-gray-900/50 ease-out md:hidden"
              onClick={closeMobileNav}
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.nav
                className="absolute z-10 h-full w-64 bg-gray-700 p-4 text-lg"
                key="nav"
                initial={{ transform: 'translateX(-100%)' }}
                animate={{ transform: 'translateX(0)' }}
                exit={{ transform: 'translateX(-100%)' }}
              >
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
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.getElementById('mobile-nav') as HTMLDivElement
      )
    : null
}
