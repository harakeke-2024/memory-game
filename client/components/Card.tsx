import { useState } from 'react'
import data from '../../data/games'
import initialState from '../../data/gameLogic.ts'
import { Link } from 'react-router-dom'
interface singleCard {
  val: string
  bool: boolean
  id: string
}

interface Props {
  val: string
}

console.log(initialState)

function Card(props: Props) {
  const [number, setNumber] = useState(initialState)
  const [color, setColor] = useState('black')

  function handleClick(val: string) {
    // const checkCard: Card = number.find((ele) => ele.id == id)
    // const ourCard = number.indexOf(checkCard)
    // checkCard.bool = true
    // setNumber(number.splice(ourCard, 1, checkCard))
    // console.log(number)
    setColor('white')
  }

  return (
    <>
      <button
        key={props.val}
        className="p-button"
        onClick={() => {
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
