import { useState } from 'react'
import data from '../../data/games'
import initialState from '../../data/gameLogic.ts'
import { Link } from 'react-router-dom'

interface Props {
  val: string
  handleClick: (val: string) => void
}

console.log(initialState)

function Card(props: Props) {
  const [color, setColor] = useState('black')
  const [firstCard, setFirstCard] = useState('')

  function handleClick(val: string) {
    setColor('white')
    console.log(color)
    if (firstCard.length == 0) {
      setFirstCard(val)
      //console.log('firstcard: ' + firstCard)
    } else {
      //call check if cards match
    }
  }

  return (
    <>
      <button
        key={props.val}
        className="p-button"
        onClick={() => {
          console.log(color)
          handleClick(props.val)
        }}
        style={{ background: color }}
      >
        {props.val}
      </button>
    </>
  )
}

export default Card
