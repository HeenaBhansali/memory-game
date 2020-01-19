import {
  UPDATE_CURRENT_CARD,
  successFullMatch,
  unsuccessFullMatch
} from "../actions/game"

const checkSuccessfulMatch = store => next => action => {
  console.log(store.getState())
  console.log("action", action)
  if (action.type === UPDATE_CURRENT_CARD) {
    console.log("current card", store.getState().currentCard.value)
    console.log("next card", action.value)
    if (store.getState().currentCard.value === action.value) {
      return store.dispatch(successFullMatch(action.index))
    }
    if (store.getState().currentCard.value === null) {
      return next(action)
    }
    unsuccessFullMatch(action.index, store.dispatch)
    return next(action)
  }
  return next(action)
}

export default checkSuccessfulMatch
