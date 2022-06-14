import { useEffect } from 'react'
import { Box } from '@chakra-ui/layout'

import { useWallet } from 'hook'

import { ItemNFT } from './ItemNFT'

export const ListNFT = () => {
  const { listNFTContractData, getListNFTContracts } = useWallet()

  useEffect(() => {
    getListNFTContracts()
  }, [getListNFTContracts])

  return (
    <Box>
      {listNFTContractData?.map((item, index) => (
        <ItemNFT key={index} nftData={item} />
      ))}
    </Box>
  )
}
