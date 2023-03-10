import { useContext } from 'react'
import { AppContext } from '@/contexts/AppContext'
import { AppState } from '@/state/reducer'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useAppSelect(cb?: (state: AppState | null) => any) {
  const state = useContext(AppContext)
  return cb ? cb(state) : state
}
