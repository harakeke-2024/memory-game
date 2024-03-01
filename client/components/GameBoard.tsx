import data from '../../data/Logic.ts'

import { Link } from 'react-router-dom'
import Card from './Card'
import { useState } from 'react'
import initialState from '../../data/gameLogic.ts'

interface Card {
  val: string
  bool: boolean
  id: string
}

function GameBoard() {
  console.log(initialState)
  const [number, setNumber] = useState(initialState)
  const color = ['black', 'white']

  function handleClick(id: string) {
    const checkCard: Card = number.find((ele) => ele.id == id)
    const ourCard = number.indexOf(checkCard)
    checkCard.bool = true
    setNumber(number.splice(ourCard, 1, checkCard))
    console.log(number)
  }

  return (
    <div>
      <h3>React</h3>
      <p>Game Board</p>
      <div className="board">
        {number.map((card) => (
          <button
            key={card.id}
            className="p-button"
            onClick={() => {
              handleClick(card.id)
            }}
            style={
              card.bool ? { background: color[1] } : { background: color[0] }
            }
          >
            {card.val}
          </button>
        ))}
      </div>
    </div>
  )
}

export default GameBoard
