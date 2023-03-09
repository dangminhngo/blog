import { useState, useEffect } from 'react'

export function useScrollOver(ref: React.RefObject<HTMLElement>, distance: number) {
  const [over, setOver] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const scrollFromTop =
        ref.current.offsetTop + ref.current.getBoundingClientRect().height + distance
      if (window.pageYOffset > scrollFromTop) {
        setOver(true)
      } else {
        setOver(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [ref, distance])

  return over
}
