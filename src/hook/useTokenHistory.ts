import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from 'hook'
import { getTokenHistoryService } from 'services'
import { SENT, RECEIED } from 'config'
import { ITokenHistoryDTO } from 'types'

export const useTokenHistory = () => {
  const [tokenHistory, setTokenHistory] = useState<ITokenHistoryDTO[]>()
  const [isTokenHistoryLoading, setTokenHistoryLoading] = useState(false)
  const { user } = useAuth()
  const router = useRouter()
  const { id } = router.query
  const userWalletAddress = user?.walletAddress || ''

  const getTokenHistory = useCallback(async () => {
    try {
      setTokenHistoryLoading(true)
      if (!user?.walletAddress) {
        throw new Error('missing wallet address')
      }

      const data = await getTokenHistoryService(
        user?.walletAddress,
        id as string
      )
      setTokenHistory(data)
    } catch (error) {
      setTokenHistory([])
    } finally {
      setTokenHistoryLoading(false)
    }
  }, [id, user?.walletAddress])

  const handleDayTime = (thu: number) => {
    if (thu === 0) {
      return 'Mon'
    } else if (thu === 1) {
      return 'Tue'
    } else if (thu === 2) {
      return 'Wed'
    } else if (thu === 3) {
      return 'Thu'
    } else if (thu === 4) {
      return 'Fri'
    } else if (thu === 5) {
      return 'Sat'
    } else if (thu === 6) {
      return 'sun'
    }
  }

  const handleSetDate = (date: string) => {
    let d, m, y, thu, final
    let result = parseInt(date)
    let today = new Date()

    let temp = new Date(result * 1000)
    d = temp.getDate()
    m = temp.getMonth() + 1
    y = temp.getFullYear()
    thu =
      d === today.getDate() &&
      m - 1 === today.getMonth() &&
      y === today.getFullYear()
        ? 'Today'
        : handleDayTime(temp.getDay())
    final = `${d}/${m}/${y}`
    return { final, thu }
  }
  const handleSetStatus = (address: string) => {
    if (address === userWalletAddress) {
      return SENT
    } else return RECEIED
  }
  let arr: any[] = []
  let newTokenHistoryArr: any[] = []

  const newHistory = tokenHistory?.map((item) => {
    return { ...item, timestamp: handleSetDate(item.dateTime) }
  })

  newHistory?.forEach((item, index) => {
    let tempI = 0
    if (!arr.includes(item.timestamp.final)) {
      arr.push(item.timestamp.final)
      newTokenHistoryArr.push({
        time: item.timestamp,
        content: [newHistory[index]],
      })

      tempI = index
    } else newTokenHistoryArr[tempI]?.content.push(newHistory[index])
  })

  return {
    isTokenHistoryLoading,
    tokenHistory: newTokenHistoryArr,
    getTokenHistory,
    handleSetDate,
    handleSetStatus,
  }
}
