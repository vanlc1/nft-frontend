import { axios } from 'utils'

import {
  API_GET_ADDRESS_BY_USERNAME,
  API_GET_USERNAME_BY_ADDRESS,
} from 'config'

export interface IProfileDTO {
  walletAddress: string
  image: string
  userName: string
  nickName?: string
}

interface IProfileResponse {
  result: {
    username: string
    address: string
    avatarUrl: string
  }
}

export const getAddressByUserNameService = async (userName: string) => {
  try {
    const {
      data: { result },
    } = await axios.post<IProfileResponse>(API_GET_ADDRESS_BY_USERNAME, {
      jsonrpc: '2.0',
      method: 'vgc_getAddressByUsername',
      params: [userName],
      id: 1,
    })

    const res: IProfileDTO = result
      ? {
          walletAddress: result.address,
          userName: result.username,
          image: result.avatarUrl,
        }
      : Object()

    return res
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getUserNameByAddressService = async (contractAddress: string) => {
  try {
    const {
      data: { result },
    } = await axios.post<IProfileResponse>(API_GET_USERNAME_BY_ADDRESS, {
      jsonrpc: '2.0',
      method: 'vgc_getUserNameByAddress',
      params: [contractAddress],
      id: 1,
    })

    const res: IProfileDTO = result
      ? {
          walletAddress: result.address,
          userName: result.username,
          image: result.avatarUrl,
        }
      : Object()

    return res
  } catch (error) {
    return Promise.reject(error)
  }
}
