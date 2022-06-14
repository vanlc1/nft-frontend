import { axios } from 'utils'

import { API_RECEIVE_QR_CODE } from 'config'

export interface IReceiveQRCode {
  qrTokenSrc: string
  userId: string
  userName: string
  userPicSrc: string
  walletAddress: string
}

export const getQRCodeReceiveTokenService = async (userId: string) => {
  try {
    const {
      data: { data },
    } = await axios.post(API_RECEIVE_QR_CODE, {
      jsonrpc: '2.0',
      method: 'vgc_getQRCodeReceiveToken',
      params: {
        userId: userId,
      },
      id: 1,
    })

    const res: IReceiveQRCode = data
      ? {
          qrTokenSrc: data.qrTokenSrc,
          userId: data.userId,
          userName: data.username,
          userPicSrc: data.userPicSrc,
          walletAddress: data.walletAddress,
        }
      : Object()

    return res
  } catch (error) {
    return Promise.reject(error)
  }
}
