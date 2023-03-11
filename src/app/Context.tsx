'use client'
import Header from './Header'
import Footer from './Footer'

import { useReducer } from 'react'
import reducer, { initialState } from '@/state/reducer'
import { AppContext, AppDispatchContext } from '@/contexts/AppContext'

export default function Context({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        <Header />
        <main className="min-h-[calc(100vh-152px)]">{children}</main>
        <Footer />
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  )
}
