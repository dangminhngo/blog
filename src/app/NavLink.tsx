import Link from 'next/link'

export interface NavLinkProps {
  href: string
  active: boolean
  children: React.ReactNode
}

export default function NavLink({ children, href, active }: NavLinkProps) {
  return (
    <li>
      <Link href={href} className="duration-100 hover:text-accent-300">
        {children}
      </Link>
    </li>
  )
}
