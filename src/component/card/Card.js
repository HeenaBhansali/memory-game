import React from "react"
import styles from "./Card.module.css"

class Card extends React.Component {
  constructor() {
    super()

    this.state = {
      open: false
    }
  }

  handleOnClick = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { cardId } = this.props
    return (
      <div className={styles.card} onClick={this.handleOnClick}>
        {this.state.open && cardId}
      </div>
    )
  }
}

export default Card
