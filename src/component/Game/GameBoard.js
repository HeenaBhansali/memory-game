import React from "react"
import { connect } from "react-redux"
import Card from "../card/Card"

class GameBoard extends React.Component {
  render() {
    const { shuffledCards } = this.props
    return <div></div>
  }
}

const mapStateToProps = ({ shuffledCards }) => {
  return {
    shuffledCards
  }
}

export default connect(mapStateToProps)(GameBoard)
