import { useEffect } from 'react'
import MagnifyingGlass from '@/assets/icons/MagnifyingGlass'
import NavLink from './NavLink'
import SearchModal from './SearchModal'
import { tags } from '@/lib/mock'
import { toggleSearchModal } from '@/state/actions'
import { useAppSelect, useAppDispatch } from '@/hooks'

export default function Nav() {
  const searchModalShow = useAppSelect((state) => state?.searchModalShow)
  const dispatch = useAppDispatch()
  const _toggleSearchModal = () => dispatch(toggleSearchModal())

  useEffect(() => {
    if (searchModalShow) {
      document.body.style.overflow = 'hidden'
      return
    }

    document.body.style.overflow = 'auto'
  }, [searchModalShow])

  return (
    <>
      <nav className="flex items-center gap-8">
        <ul className="flex items-center gap-8">
          <NavLink href="/" active={false}>
            Home
          </NavLink>
          <NavLink href="/tags" active={false}>
            #Tags
          </NavLink>
          <NavLink href="/about" active={false}>
            About
          </NavLink>
          <NavLink href="/contact" active={false}>
            Contact
          </NavLink>
        </ul>
        <button className="outline-none hover:text-accent-400" onClick={_toggleSearchModal}>
          <MagnifyingGlass />
        </button>
      </nav>
      <SearchModal tags={tags} show={searchModalShow} close={_toggleSearchModal} />
    </>
  )
}
