import { FC, useEffect, useState } from 'react'
import GameService from '../gameService'
import io from 'socket.io-client'
import Statistics from '../../components/statistics'

const socket = io('http://localhost:9000')

const MatchMakingService: FC = () => {
  const [player, setPlayer] = useState('X')
  const [board, setBoard] = useState<string[]>([])
  const [wins, setWins] = useState(0)
  const [losses, setLosses] = useState(0)

  useEffect(() => {
    socket.on('start_game', message => {
      setPlayer(message.player)
      setBoard(message.board)
    })

    socket.on('update_board', board => {
      setBoard(board)
    })

    socket.on('player_disconnect', () => {
      setBoard([])
    })

    socket.on('game_over', winnerSign => {
      if (winnerSign === player) {
        setWins(wins + 1)
      } else {
        setLosses(losses + 1)
      }
    })

    return () => {
      socket.off('start_game')
      socket.off('update_board')
      socket.off('player_disconnect')
      socket.off('game_over')
    }
  }, [losses, player, wins])

  const sendClickCallback = (index: number) => {
    socket.emit('click', index)
  }

  return (
    <>
      <GameService sendClickCallback={sendClickCallback} board={board} />
      <Statistics wins={wins} losses={losses} />
    </>
  )
}

export default MatchMakingService
