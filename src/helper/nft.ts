import {
  NFT_STATE_IN_WALLET,
  NFT_STATE_ON_DAPP,
  NFT_STATE_ON_MARKET,
  NFT_TYPE1,
  NFT_TYPE2,
  NFT_TYPE3,
} from 'config'

export const getTextNFTState = (value: string) => {
  if (value === NFT_STATE_IN_WALLET) {
    return 'In Wallet'
  } else if (value === NFT_STATE_ON_MARKET) {
    return 'On Market'
  } else if (value === NFT_STATE_ON_DAPP) {
    return 'On DApps'
  } else {
    return ''
  }
}

export const getTextNFTType = (value: string) => {
  if (value === NFT_TYPE1) {
    return 'Type 1'
  } else if (value === NFT_TYPE2) {
    return 'Type 2'
  } else if (value === NFT_TYPE3) {
    return 'Type 3'
  } else {
    return ''
  }
}
