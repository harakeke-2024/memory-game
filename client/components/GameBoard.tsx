import data from '../../data/Logic.ts'

import { Link } from 'react-router-dom'
import Card from './Card'
import { useState } from 'react'
import initialState from '../../data/gameLogic.ts'

function GameBoard() {
  return (
    <div className="board">
      <Card val="one" />
      <Card val="two" />
      <Card val="three" />
      <Card val="two" />
      <Card val="three" />
      <Card val="one" />
    </div>
  )
}

export default GameBoard
