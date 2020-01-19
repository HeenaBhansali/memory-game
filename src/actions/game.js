export const INITIALIZE_GAME_STATE = "INITIALIZE_GAME_STATE"
export const OPEN_CARD = "OPEN_CARD"
export const UPDATE_CURRENT_CARD = "UPDATE_CURRENT_CARD"
export const SUCCESSFULL_MATCH = "SUCCESSFULL_MATCH"
export const UNSUCCESSFULL_MATCH = "UNSUCCESSFULL_MATCH"

export const initializeGameState = shuffledCards => {
  return {
    type: INITIALIZE_GAME_STATE,
    shuffledCards
  }
}

export const openCardAction = () => {
  return {
    type: OPEN_CARD
  }
}

export const updateCurrentCardAction = (value, index) => {
  return {
    type: UPDATE_CURRENT_CARD,
    value,
    index
  }
}

export const successFullMatch = index => {
  return {
    type: SUCCESSFULL_MATCH,
    index
  }
}

export const unsuccessFullMatch = (index, dispatch) => {
  setTimeout(
    () =>
      dispatch({
        type: UNSUCCESSFULL_MATCH,
        index
      }),
    5000
  )
}
