import React from "react"
import Card from "../card/Card"
import styles from "./Game.module.css"
import { connect } from "react-redux"
import { initializeGameState } from "../../actions/game"
import GameBoard from "./GameBoard"

class Game extends React.Component {
  constructor() {
    super()
  }

  createCard = () => {
    const cards = []
    for (let i = 1; i <= 8; i++) {
      cards.push(i)
      cards.push(i)
    }
    cards.sort(() => 0.5 - Math.random())

    return cards
  }
  render() {
    this.props.dispatch(initializeGameState(this.createCard()))
    return <GameBoard />
  }
}

export default connect()(Game)
