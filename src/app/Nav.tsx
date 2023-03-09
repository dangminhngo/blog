import MagnifyingGlass from '@/assets/icons/MagnifyingGlass'
import NavLink from './NavLink'

export default function Nav() {
  return (
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
      <button>
        <MagnifyingGlass />
      </button>
    </nav>
  )
}
