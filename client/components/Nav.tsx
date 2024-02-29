import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <h3>Games</h3>
      <ul>
        <li key="React">
          <Link to="/">Home</Link>
        </li>
        <li key="React">
          <Link to="/game">React</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
