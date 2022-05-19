import { CREATE_TELNUMB } from './types'

const initialState = {
  telephones: [],
}

export const phoneListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TELNUMB:
      return { ...state, telephones: [...state.telephones, [action.payload]] }
    default: return state
  }
}