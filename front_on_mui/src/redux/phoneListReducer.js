import { CREATE_TELNUMB, FETCH_NUMBERS } from './types'

const initialState = {
  phoneNumbers: [],
  fetchedNumbers: []
}

export const phoneListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TELNUMB:
      return { ...state, phoneNumbers: [...state.phoneNumbers, [action.payload]] }
    case FETCH_NUMBERS:
      return { ...state, fetchedNumbers: action.payload}
    default: return state
  }
}