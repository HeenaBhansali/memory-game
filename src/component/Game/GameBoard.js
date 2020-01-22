import React from "react"
import { connect } from "react-redux"
import Card from "../card/Card"
import styles from "./Game.module.css"
import { cardImages } from "../../images"

class GameBoard extends React.Component {
  render() {
    const { shuffledCards, matchedCards, currentCardIndex } = this.props
    return (
      <div>
        {this.props.matchedCards.indexOf(0) === -1 && this.props.noOfMoves}

        <div className={styles.game}>
          {shuffledCards.map((cardValue, index) => {
            let cardOpened = false
            let img = cardImages[8]
            if (matchedCards[index] || currentCardIndex === index) {
              cardOpened = true
              img = cardImages[cardValue - 1]
            }

            return (
              <Card
                key={index}
                cardValue={cardValue}
                index={index}
                cardOpened={cardOpened}
                img={img}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({
  shuffledCards,
  matchedCards,
  currentCard,
  noOfMoves
}) => {
  console.group("mtps")
  console.log(shuffledCards)
  console.log(currentCard)
  console.log(matchedCards)
  console.groupEnd()
  return {
    shuffledCards,
    matchedCards,
    currentCardIndex: currentCard.index,
    noOfMoves
  }
}

export default connect(mapStateToProps)(GameBoard)
