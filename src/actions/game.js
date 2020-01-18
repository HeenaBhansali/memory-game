export const INITIALIZE_GAME_STATE = "INITIALIZE_GAME_STATE"

export const initializeGameState = shuffledCard => {
  return {
    type: INITIALIZE_GAME_STATE,
    shuffledCard
  }
}
