import { useCallback, useState } from 'react'
import { useRecoilState } from 'recoil'
import { userAtom } from 'atoms'
import {
  getAddressByUserNameService,
  getUserNameByAddressService,
  IProfileDTO,
} from 'services'

const SEARCH_TYPE = {
  USER_NAME: 0,
  CONTRACT_ADDRESS: 1,
}
const validContractAddress = new RegExp('^0[xX][0-9a-fA-F]+$')

export const useProfile = () => {
  const [isLoading, setLoading] = useState(false)
  const [profile, setProfile] = useState<IProfileDTO>()
  const [user] = useRecoilState(userAtom)

  const searchProfile = useCallback(
    async (keyWord: string) => {
      try {
        setLoading(true)
        if (!user?.walletAddress) {
          throw new Error('Missing wallet address')
        }
        const searchType = analyzeType(keyWord)
        let profile: IProfileDTO
        if (!searchType) {
          profile = await getAddressByUserNameService(keyWord)
        } else {
          profile = await getUserNameByAddressService(keyWord)
        }
        setProfile(profile)
      } catch (error) {
        setProfile(profile)
      } finally {
        setLoading(false)
      }
    },
    [profile, user?.walletAddress]
  )

  const analyzeType = (keyWord: string) => {
    if (validContractAddress.test(keyWord)) {
      return SEARCH_TYPE.CONTRACT_ADDRESS
    } else {
      return SEARCH_TYPE.USER_NAME
    }
  }

  return {
    isLoading,
    profile,
    searchProfile,
  }
}
