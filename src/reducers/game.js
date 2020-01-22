import {
  INITIALIZE_GAME_STATE,
  OPEN_CARD,
  UPDATE_CURRENT_CARD,
  SUCCESSFULL_MATCH,
  UNSUCCESSFULL_MATCH
} from "../actions/game"

const game = (state, action) => {
  console.log("reducer")
  switch (action.type) {
    case INITIALIZE_GAME_STATE:
      console.log("reducer")
      return {
        ...state,
        shuffledCards: action.shuffledCards
      }
    case OPEN_CARD:
      return { ...state, noOfOpenedCards: state.noOfOpenedCards + 1 }
    case UPDATE_CURRENT_CARD:
      return {
        ...state,
        currentCard: { value: action.value, index: action.index },
        noOfMoves: state.noOfMoves + 1
      }
    case SUCCESSFULL_MATCH:
      console.log("success")
      console.log("currentcard", state.currentCard.index)
      console.log("nextcard", action.index)
      let newArray = state.matchedCards
      newArray[state.currentCard.index] = 1
      newArray[action.index] = 1
      return {
        ...state,
        matchedCards: newArray,
        currentCard: { value: null, index: null },
        noOfMoves: state.noOfMoves + 1
      }
    case UNSUCCESSFULL_MATCH:
      return {
        ...state,
        currentCard: { value: null, index: null }
        // noOfMoves: state.noOfMoves + 1
      }

    default:
      return state
  }
}

export default game
