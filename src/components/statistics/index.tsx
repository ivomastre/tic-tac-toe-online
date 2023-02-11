import { FC } from 'react'
import { StyledStatistics } from './styles'

interface IStatisticsProps {
  wins: number
  losses: number
}

const Statistics: FC<IStatisticsProps> = ({ wins, losses }) => {
  return (
    <StyledStatistics>
      <div>
        <span>Wins: </span>
        <span>{wins}</span>
      </div>
      <div>
        <span>Losses: </span>
        <span>{losses}</span>
      </div>
    </StyledStatistics>
  )
}

export default Statistics
