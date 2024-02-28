import data from '../../data/games'

import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <h3>Games</h3>
      <ul>
        {Object.keys(data).map((game) => (
          <li key={game}>
            <Link to={`/game/${game}`}>{game}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav
