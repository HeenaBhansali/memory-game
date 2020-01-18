import React from "react"
import Game from "./component/Game/Game"
import { createStore } from "redux"
import reducer from "./reducers/game"
import { Provider } from "react-redux"

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  )
}

export default App
