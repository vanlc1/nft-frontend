import { useCallback, useState } from 'react'
import { useRecoilState } from 'recoil'

import { userAtom } from 'atoms'
import { getQRCodeReceiveTokenService, IReceiveQRCode } from 'services'

export const useUser = () => {
  const [receiveQRCodeData, setReceiveQRCodeData] = useState<IReceiveQRCode>()
  const [isReceiveQRCodeLoading, setReceiveQRCodeLoading] = useState(false)
  const [user] = useRecoilState(userAtom)

  const getQRCodeReceiveToken = useCallback(async () => {
    try {
      setReceiveQRCodeLoading(true)
      if (!user?.userId) {
        throw new Error('Missing user')
      }
      const data = await getQRCodeReceiveTokenService(user?.userId)
      setReceiveQRCodeData(data)
    } catch (error) {
      setReceiveQRCodeData(undefined)
    } finally {
      setReceiveQRCodeLoading(false)
    }
  }, [user?.userId])

  return {
    receiveQRCodeData,
    isReceiveQRCodeLoading,
    getQRCodeReceiveToken,
  }
}
