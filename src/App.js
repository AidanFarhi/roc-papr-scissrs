
import React, {Component} from 'react'
import PlayerCard from './PlayerCard.js'

class Game extends Component {
  constructor(){
    super()
    this.signs = ['rock', 'paper', 'scissors']
    this.state = {
      playerOne: 'rock',
      playerTwo: 'scissors'
    }
  }

  playGame = () => {
    this.setState({
      playerOne: this.signs[Math.floor(Math.random() * 3)],
      playerTwo: this.signs[Math.floor(Math.random() * 3)]
    })
  }

  decideWinner = () => {
    const p1 = this.state.playerOne
    const p2 = this.state.playerTwo
     if (p1 === p2) {
       return 'Tie!'
     } else if ((p1 === 'rock' && p2 === 'scissors') ||
                (p1 === 'scissors' && p2 === 'paper')||
                (p1 === 'paper' && p2 === 'rock')) {
        return 'Player 1 Wins!!'            
      } else {
        return 'Player 2 Wins!!'
      }
  }

  render() {
    return (
      <div className="style">
        <div className='players'>
          <PlayerCard sign={this.state.playerOne}/>
          <PlayerCard sign={this.state.playerTwo}/>
        </div>
        <div className='winner'>{this.decideWinner()}</div>
        <button type='button' onClick={this.playGame}>Play The Game</button>
      </div>
    )
  }
}

export default Game
