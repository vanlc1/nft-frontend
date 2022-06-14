export interface ITokenDTO {
  contractAddress: string
  nameToken: string
  symbol: string
  displayBalance: string
  srcImage: string
}

export interface INFTContractsDTO {
  contractAddress: string
  nameNFTContracts: string
  amount: string
  srcImage: string
}

export interface ITokenHistoryDTO {
  dateTime: string
  sentAddress: string
  receivedAddress: string
  tokenAmount: string
  tokenSymbol: string
}

export interface INftDTO {
  id: string
  nftName: string
  srcImage: string
  state: string
  type: string
  properties: Object[]

  authorName: string
  authorContact: string
  tokenId: string
  tokenStandard: string
}

export interface INftCollectionNftDTO {
  id: string
  nftName: string
  srcImage: string
  state: string
  type: string
  properties: Object[]
}

export interface INftCollectionDTO {
  nftContract: string
  balance: number
  nftItems: INftDTO[]
}
