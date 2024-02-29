import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Header from './Header'

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="item">
          <Nav />
        </div>
        <div className="item">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
