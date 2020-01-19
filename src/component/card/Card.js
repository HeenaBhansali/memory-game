import React from "react"
import styles from "./Card.module.css"
import { connect } from "react-redux"
import { updateCurrentCardAction } from "../../actions/game"

class Card extends React.Component {
  handleOnClick = () => {
    console.log("cardVlue", this.props.cardValue, this.props.index)
    this.props.dispatch(
      updateCurrentCardAction(this.props.cardValue, this.props.index)
    )
  }

  render() {
    return (
      <div className={styles.card} onClick={this.handleOnClick}>
        {this.props.cardOpened && this.props.cardValue}
      </div>
    )
  }
}

export default connect()(Card)
