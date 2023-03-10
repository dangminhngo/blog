import { Dispatch, ReducerAction } from 'react'
import ActionType from './types'

export interface AppState {
  mobileNavShow: boolean
  searchModalShow: boolean
}

export type AppDispatch = Dispatch<ReducerAction<typeof reducer>>

export const initialState: AppState = {
  mobileNavShow: false,
  searchModalShow: false,
}

export default function reducer(
  state: AppState = initialState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: { type: ActionType; payload?: any }
) {
  switch (action.type) {
    case ActionType.TOGGLE_MOBILE_NAV: {
      return {
        ...state,
        mobileNavShow: !state.mobileNavShow,
      }
    }

    case ActionType.TOGGLE_SEARCH_MODAL: {
      return {
        ...state,
        searchModalShow: !state.searchModalShow,
      }
    }

    default: {
      return state
    }
  }
}
