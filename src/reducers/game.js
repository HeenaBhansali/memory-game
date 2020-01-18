import { INITIALIZE_GAME_STATE } from "../actions/game"

const game = (state = {}, action) => {
  switch (action.type) {
    case INITIALIZE_GAME_STATE:
      return { ...state, shuffledCards: action.shuffledCard }
  }
}

export default game
