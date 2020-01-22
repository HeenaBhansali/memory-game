import {
  UPDATE_CURRENT_CARD,
  successFullMatch,
  unsuccessFullMatch
} from "../actions/game"

const checkSuccessfulMatch = store => next => action => {
  if (action.type === UPDATE_CURRENT_CARD) {
    if (store.getState().currentCard.value === null) {
      return next(action)
    }

    if (store.getState().currentCard.value === action.value) {
      return store.dispatch(successFullMatch(action.index))
    }
    if (store.getState().currentCard.value !== action.value) {
      store.dispatch(unsuccessFullMatch(action.index))
    }
  }
  return next(action)
}

export default checkSuccessfulMatch
