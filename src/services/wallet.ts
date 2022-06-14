import { axios } from 'utils'

import {
  API_WALLET_LIST_TOKEN,
  API_WALLET_LIST_NFT_CONTRACTS,
  API_WALLET_TOKEN_HISTORY,
  API_GET_NFT_COLLECTION,
  API_GET_NFT_DETAIL,
} from 'config'

import {
  ITokenDTO,
  INFTContractsDTO,
  ITokenHistoryDTO,
  INftCollectionDTO,
  INftDTO,
} from 'types'

export const getListTokenService = async (
  walletAddress: string,
  contractAddress: string
) => {
  try {
    const {
      data: { result },
    } = await axios.post(API_WALLET_LIST_TOKEN, {
      jsonrpc: '2.0',
      method: 'vgc_listToken',
      params: {
        address: walletAddress,
        contractAddress: contractAddress,
      },
      id: 1,
    })

    const res: ITokenDTO[] = Array.isArray(result)
      ? result.map((item: any) => ({
          contractAddress: item.contractAddress,
          nameToken: item.name,
          symbol: item.symbol,
          displayBalance: item.displayBalance,
          srcImage: item.image,
        }))
      : []

    return res
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getTokenHistoryService = async (
  walletAddress: string,
  contractAddress: string
) => {
  try {
    const {
      data: { result },
    } = await axios.post(API_WALLET_TOKEN_HISTORY, {
      jsonrpc: '2.0',
      method: 'vgc_getTokenTransferHistory',
      params: {
        walletAddr: walletAddress,
        contractAddr: contractAddress,
        fromBlock: '0x0',
        toBlock: 'latest',
      },
      id: 1,
    })
    const res: ITokenHistoryDTO[] = Array.isArray(result)
      ? result.map((item: any) => ({
          dateTime: item.timestamp,
          sentAddress: item.from,
          receivedAddress: item.to,
          tokenAmount: item.value,
          tokenSymbol: item.tokenSymbol,
        }))
      : []

    return res
    // return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getListNFTContractsService = async (walletAddress: string) => {
  try {
    const {
      data: { result },
    } = await axios.post(API_WALLET_LIST_NFT_CONTRACTS, {
      jsonrpc: '2.0',
      method: 'vgc_getNFTContracts',
      params: [walletAddress],
      id: 1,
    })

    const res: INFTContractsDTO[] = Array.isArray(result)
      ? result.map((item: any) => ({
          contractAddress: item.contractAddress,
          nameNFTContracts: item.name,
          amount: item.balance,
          srcImage: item.image,
        }))
      : []

    return res
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getListNFTCollectionService = async (
  walletAddress: string,
  contractAddress: string
) => {
  try {
    const {
      data: { result },
    } = await axios.post(API_GET_NFT_COLLECTION, {
      jsonrpc: '2.0',
      method: 'vgc_listNFTs',
      params: {
        contractAddress: contractAddress,
        address: walletAddress,
      },
      id: 1,
    })

    const res: INftCollectionDTO = {
      nftContract: result.contractAddress,
      balance: result.balance,
      nftItems: result.data.map(
        (dataWrapper: any): INftDTO => ({
          id: dataWrapper.id,
          nftName: dataWrapper.metadata.name,
          srcImage: dataWrapper.metadata.image,
          state: dataWrapper.metadata.state,
          type: dataWrapper.metadata.type,
          properties: dataWrapper.metadata.properties,

          authorName: dataWrapper.metadata.authorName,
          authorContact: dataWrapper.metadata.authorContact,
          tokenId: dataWrapper.metadata.tokenId,
          tokenStandard: dataWrapper.metadata.tokenStandard,
        })
      ),
    }

    return res
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getNFTDetailService = async (
  walletAddress: string,
  contractAddress: string
) => {
  try {
    const {
      data: { result },
    } = await axios.post(API_GET_NFT_DETAIL, {
      jsonrpc: '2.0',
      method: 'vgc_listNFTs',
      params: {
        contractAddress: contractAddress,
        address: walletAddress,
      },
      id: 1,
    })

    const dataWrapper = result.data[0]
    const data: INftDTO = {
      id: dataWrapper.id,
      nftName: dataWrapper.metadata.name,
      srcImage: dataWrapper.metadata.image,
      state: dataWrapper.metadata.state,
      type: dataWrapper.metadata.type,
      properties: dataWrapper.metadata.properties,

      authorName: dataWrapper.metadata.authorName,
      authorContact: dataWrapper.metadata.authorContact,
      tokenId: dataWrapper.metadata.tokenId,
      tokenStandard: dataWrapper.metadata.tokenStandard,
    }
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}
