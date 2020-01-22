import React from "react"
import Game from "./component/Game/Game"
import { createStore } from "redux"
import reducer from "./reducers/game"
import { Provider } from "react-redux"
import middleware from "./middleware"

const initialState = {
  shuffledCards: [],
  noOfOpenedCards: 0,
  currentCard: { value: null, index: null },
  matchedCards: new Array(16).fill(0),
  noOfMoves: 0
}

const store = createStore(reducer, initialState, middleware)

function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  )
}

export default App
