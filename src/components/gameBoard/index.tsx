import { FC } from 'react'
import GameCell from '../gameCell'

import { StyledGameBoard } from './styles'

interface IGameBoardProps {
  clickCallback: (index: number) => void
  board: string[]
}

const GameBoard: FC<IGameBoardProps> = ({ board, clickCallback }) => {
  const onClick = (index: number) => {
    clickCallback(index)
  }

  return (
    <StyledGameBoard>
      {board.map((cell, index) => (
        <GameCell
          key={index}
          cell={cell}
          onClick={() => (!cell ? onClick(index) : null)}
        />
      ))}
    </StyledGameBoard>
  )
}

export default GameBoard
