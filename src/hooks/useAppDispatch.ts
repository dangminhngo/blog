import { useContext } from 'react'
import { AppDispatchContext } from '@/contexts/AppContext'
import { AppDispatch } from '@/state/reducer'

export function useAppDispatch(): AppDispatch {
  const dispatch = useContext(AppDispatchContext)
  return dispatch
}
