import ActionType from './types'

export function toggleMobileNav() {
  return {
    type: ActionType.TOGGLE_MOBILE_NAV,
  }
}

export function toggleSearchModal() {
  return {
    type: ActionType.TOGGLE_SEARCH_MODAL,
  }
}
