//import data from '../../data/Logic.ts'

const allCards = ['one', 'two', 'three']

import { Link } from 'react-router-dom'
import Card from './Card'
import { useState } from 'react'
import initialState from '../../data/gameLogic.ts'

function GameBoard() {
  return (
    <div className="board">
      {allCards.map((card) => (
        <Card key={card} val={card} />
      ))}
    </div>
  )
}

export default GameBoard
