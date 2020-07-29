
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

  // passing in evt here will give you access to evt.target
  // which returns the acual "html" object, then givin us
  // access to all the attributes of our button
  playGame = (evt) => {
    const val = evt.target.value
    this.setState({
      playerOne: val,
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
        return 'Player Wins!!'            
      } else {
        return 'Computer Wins!!'
      }
  }

  render() {
    return (
      <div className="style">
        <h1>Rock-Paper-Scissors</h1>
        <div className='names'>
          <h2 id='player-name'>Player</h2>
          <h2 id='computer-name'>Computer</h2>
        </div>
        <div className='players'>
          <PlayerCard sign={this.state.playerOne}/>
          <PlayerCard sign={this.state.playerTwo}/>
        </div>
        <div className='winner'><h3>{this.decideWinner()}</h3></div>
        <h3>Pick Your Weapon!</h3>
        <div className='buttons'>
          <button type='button' onClick={this.playGame} value='rock'>Rock</button>
          <button type='button' onClick={this.playGame} value='paper'>Paper</button>
          <button type='button' onClick={this.playGame} value='scissors'>Scissors</button>
        </div>  
      </div>
    )
  }
}

export default Game
