import { AppState, AppDispatch } from '@/state/reducer'
import { createContext } from 'react'

export const AppContext = createContext<AppState | null>(null)
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const AppDispatchContext = createContext<AppDispatch>(() => {})
