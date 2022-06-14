import { useCallback, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import { userAtom } from 'atoms'
import {
  getListTokenService,
  getListNFTContractsService,
  getListNFTCollectionService,
  getNFTDetailService,
} from 'services'

import { ITokenDTO, INFTContractsDTO, INftCollectionDTO, INftDTO } from 'types'

export const useWallet = () => {
  const [listTokenData, setListToken] = useState<ITokenDTO[]>([])
  const [tokenDetails, setTokenDetails] = useState<ITokenDTO>()
  const [listNFTContractData, setListNFTContract] = useState<
    INFTContractsDTO[]
  >([])
  const [nftCollection, setNftCollection] = useState<INftCollectionDTO>()
  const [nftDetail, setNftDetail] = useState<INftDTO>()

  const [isTokenLoading, setTokenLoading] = useState(false)
  const [isTokenDetailLoading, setTokenDetailLoading] = useState(false)
  const [isNFTContractLoading, setNFTContractLoading] = useState(false)
  const [isListNFTLoading, setListNFTLoading] = useState(false)
  const router = useRouter()
  const [user] = useRecoilState(userAtom)

  const getListToken = useCallback(async () => {
    try {
      setTokenLoading(true)
      if (!user?.walletAddress) {
        throw new Error('Missing user')
      }
      const data = await getListTokenService(user?.walletAddress, '')
      setListToken(data)
    } catch (error) {
      setListToken([])
    } finally {
      setTokenLoading(false)
    }
  }, [user?.walletAddress])

  const getListNFTContracts = useCallback(async () => {
    try {
      setNFTContractLoading(true)
      if (!user?.walletAddress) {
        throw new Error('Missing user')
      }
      const data = await getListNFTContractsService(user?.walletAddress)
      setListNFTContract(data)
    } catch (error) {
      setListToken([])
    } finally {
      setNFTContractLoading(false)
    }
  }, [user?.walletAddress])

  const getTokenDetails = useCallback(async () => {
    const { id } = router.query
    try {
      setTokenDetailLoading(true)
      if (!user?.walletAddress) {
        throw new Error('Missing user')
      }
      const data = await getListTokenService(user?.walletAddress, id as string)
      setTokenDetails(data[0])
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setTokenDetailLoading(false)
    }
  }, [router.query, user?.walletAddress])

  const getNFTCollection = useCallback(async () => {
    try {
      setListNFTLoading(true)
      if (!user?.walletAddress) {
        throw new Error('Missing user')
      }
      const data = await getListNFTCollectionService(
        user?.walletAddress,
        String(router.query.nftCollectionId)
      )
      setNftCollection(data)
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setListNFTLoading(false)
    }
  }, [router.query.nftCollectionId, user?.walletAddress])

  const getNFTDetails = useCallback(async () => {
    try {
      if (!user?.walletAddress) {
        throw new Error('Missing user')
      }
      const data = await getNFTDetailService(
        user?.walletAddress,
        String(router.query.nftCollectionId)
      )
      setNftDetail(data)
    } catch (error) {
    } finally {
    }
  }, [router.query.nftCollectionId, user?.walletAddress])

  return {
    listTokenData,
    listNFTContractData,
    isTokenLoading,
    isTokenDetailLoading,
    isNFTContractLoading,
    isListNFTLoading,
    tokenDetails,
    nftCollection,
    nftDetail,
    getTokenDetails,
    getListToken,
    getListNFTContracts,
    getNFTCollection,
    getNFTDetails,
  }
}
