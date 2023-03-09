import Link from 'next/link'

export interface NavLinkProps {
  href: string
  active: boolean
  children: React.ReactNode
}

export default function NavLink({ children, href, active }: NavLinkProps) {
  return (
    <li>
      <Link href={href} className="hover:text-accent-300 duration-100">{children}</Link>
    </li>
  )
}
