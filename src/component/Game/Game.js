import React from "react"
import { connect } from "react-redux"
import { initializeGameState } from "../../actions/game"
import GameBoard from "./GameBoard"

const createCard = () => {
  const cards = []
  for (let i = 1; i <= 8; i++) {
    cards.push(i)
    cards.push(i)
  }
  cards.sort(() => 0.5 - Math.random())

  return cards
}

class Game extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  static getDerivedStateFromProps(props, state) {
    props.dispatch(initializeGameState(createCard()))
    return null
  }

  render() {
    return <GameBoard />
  }
}

export default connect()(Game)
