import Home from './components/Home'
import Game from './components/Game'
import { useState } from 'react'
function App() {

  const [gameStarted, setGameStarted] = useState(false)

  const togglegame = () => {
    setGameStarted((prev) => !prev)
  }
  return (
    <>
      {
        gameStarted ? <Game toggle={togglegame}/> : <Home toggle={togglegame} />
      }
    </>
  )
}

export default App
