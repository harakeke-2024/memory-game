import { Outlet } from 'react-router-dom'
import Nav from './Nav'

function App() {
  return (
    <>
      <h2>Memory Games</h2>
      <div className="main-container">
        <div className="item">
          <Nav />
        </div>
        <div className="item">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
