import React from "react"
import { connect } from "react-redux"
import Card from "../card/Card"
import styles from "./Game.module.css"

class GameBoard extends React.Component {
  render() {
    const { shuffledCards, matchedCards, currentCardIndex } = this.props
    return (
      <div className={styles.game}>
        {shuffledCards.map((cardValue, index) => {
          let cardOpened = false
          if (matchedCards[index] || currentCardIndex === index)
            cardOpened = true
          console.log(cardOpened)
          return (
            <Card
              key={index}
              cardValue={cardValue}
              index={index}
              cardOpened={cardOpened}
            />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = ({ shuffledCards, matchedCards, currentCard }) => {
  console.group("mtps")
  console.log(shuffledCards)
  console.log(currentCard)
  console.log(matchedCards)
  console.groupEnd()
  return {
    shuffledCards,
    matchedCards,
    currentCardIndex: currentCard.index
  }
}

export default connect(mapStateToProps)(GameBoard)
