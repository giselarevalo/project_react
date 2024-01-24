
import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame, } from './logic/board'
import { WinnerModal } from './components/WinnerModal'




function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  // null no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

  

  // reset de game 
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

  }

  

  const updateBoard = (index) => {
    // no actualizamos esta posicion
    // si ya tiene algo

    if (board[index] || winner) return // detiene la ejecucion 

    // actualiza el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // revisamos si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>TIC TAC TOE</h1>
      <button onClick={resetGame}>
        Empezar de nuevo
      </button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
        {
          <WinnerModal resetGame={resetGame} winner={winner}/>
        }

      </section>
    </main>
  )
}

export default App
