import { FC } from 'react'
import { StyledGameCell } from './styles'

interface GameCellProps {
  cell: string
  onClick: () => void
}

const GameCell: FC<GameCellProps> = ({ cell, onClick }) => {
  return <StyledGameCell onClick={onClick}> {cell} </StyledGameCell>
}

export default GameCell
