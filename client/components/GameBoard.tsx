import data from '../../data/games'

import { Link } from 'react-router-dom'
import Card from './Card'
import { useState } from 'react'

const row1 = ['2', '1', '3']
const row2 = row1.toSorted()

function GameBoard() {
  const [number, setNumber] = useState(false)

  function handleClick(number: number) {
    setNumber(true)
  }

  return (
    <div>
      <h3>React</h3>
      <p>Game Board</p>
      <div className="board">
        {row1.map((number) => (
          <button
            key={number}
            className="p-button"
            onClick={() => {
              handleClick(number)
            }}
          >
            {number}
          </button>
        ))}
        {row2.map((number) => (
          <button key={number} className="p-button">
            {number}
          </button>
        ))}
      </div>
    </div>
  )
}

export default GameBoard
