import React from "react"
import styles from "./Card.module.css"
import { connect } from "react-redux"
import { updateCurrentCardAction } from "../../actions/game"

class Card extends React.Component {
  constructor() {
    super()
    this.state = { flip: true }
  }

  //getSnapshotBeforeUpdate(prevProps, prevState) {
  //  console.log(prevProps, "prev props")
  // prevProps !== this.props
  //}

  handleOnClick = () => {
    console.log("cardVlue", this.props.cardValue, this.props.index)
    this.setState({ flip: !this.state.flip })
    this.props.dispatch(
      updateCurrentCardAction(
        this.props.cardValue,
        this.props.index,
        this.props.currentCardValue
      )
    )
  }

  render() {
    console.log("moves", this.props.noOfMoves)
    return (
      <div className={styles.card} onClick={this.handleOnClick}>
        {/* {this.state.flip && <img src={this.props.img} alt="Card" />} */}
        {/* {!this.state.flip && <img src={this.props.img} alt="Card" />} */}
        {!this.props.cardOpened && <img src={this.props.img} alt="Card" />}
        {this.props.cardOpened && <img src={this.props.img} alt="Card" />}
      </div>
    )
  }
}

const mapStateToProps = ({ currentCard, noOfMoves, matchedCards }) => {
  return {
    currentCardValue: currentCard.value,
    noOfMoves,
    matchedCards
  }
}

export default connect(mapStateToProps)(Card)
