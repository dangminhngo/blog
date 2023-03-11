import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Close from '@/assets/icons/Close'
import MagnifyingGlass from '@/assets/icons/MagnifyingGlass'
import HashTagGrid from '@/components/HashTagGrid'
import { Tag } from '@/types'
import { toggleSearchModal } from '@/state/actions'
import { useAppSelect, useAppDispatch } from '@/hooks'

export interface SearchModalProps {
  tags: Tag[]
}

export default function SearchModal({ tags }: SearchModalProps) {
  const [mounted, setMounted] = useState(false)
  const searchModalShow = useAppSelect((state) => state?.searchModalShow)
  const dispatch = useAppDispatch()
  const _toggleSearchModal = () => dispatch(toggleSearchModal())

  useEffect(() => {
    setMounted(true)
  }, [])

  function closeModal() {
    _toggleSearchModal()
  }

  return searchModalShow && mounted
    ? createPortal(
        <div className="fixed inset-0 z-50 flex flex-col bg-gray-800">
          <div className="flex justify-end">
            <button className="p-2 outline-none" onClick={closeModal}>
              <Close className="h-10 w-10" />
            </button>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-32 px-4 xl:px-0">
            <form className="flex w-full items-center rounded-lg border border-gray-500 bg-gray-600 p-3 md:w-1/2 xl:w-1/3">
              <input
                className="flex-1 bg-transparent pl-3 outline-none"
                placeholder="Type to start your search"
              />
              <button>
                <MagnifyingGlass />
              </button>
            </form>
            <div className="flex flex-col items-center gap-4">
              <p className="text-gray-400">or check popular tags</p>
              <HashTagGrid tags={tags} />
            </div>
          </div>
        </div>,
        document.getElementById('search') as HTMLDivElement
      )
    : null
}
