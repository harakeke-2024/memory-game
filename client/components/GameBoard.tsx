import data from '../../data/games'

import { Link } from 'react-router-dom'
import Card from './Card'

function GameBoard() {
  return (
    <div>
      <h3>React</h3>
      <p>Game Board</p>
      <div className="board">
        <div className="card">?</div>

        <Card />
      </div>
    </div>
  )
}

export default GameBoard
