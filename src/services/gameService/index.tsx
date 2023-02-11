import { FC, useState } from 'react'
import GameBoard from '../../components/gameBoard'

const checkWinner = (board: string[]) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const winnerTurn = winningCombinations.find(combination => {
    const [a, b, c] = combination

    return board[a] && board[a] === board[b] && board[a] === board[c]
  })

  return winnerTurn ? board[winnerTurn[0]] : null
}

interface IGameServiceProps {
  sendClickCallback: (index: number) => void
  board: string[]
}

const GameService: FC<IGameServiceProps> = ({ sendClickCallback, board }) => {
  const clickCallback = (index: number) => {
    sendClickCallback(index)
  }

  return <GameBoard clickCallback={clickCallback} board={board} />
}

export default GameService
