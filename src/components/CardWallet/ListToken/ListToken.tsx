import { useEffect } from 'react'
import { Box } from '@chakra-ui/layout'

import { useWallet } from 'hook'

import { ItemToken } from './ItemToken'
export const ListToken = () => {
  const { listTokenData, isTokenLoading, getListToken } = useWallet()

  useEffect(() => {
    getListToken()
  }, [getListToken])

  return (
    <Box>
      {listTokenData?.map((item, index) => (
        <ItemToken key={index} tokenData={item} isLoading={isTokenLoading} />
      ))}
    </Box>
  )
}
