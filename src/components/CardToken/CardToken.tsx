// import { Box, Text, Flex } from '@chakra-ui/layout'
import { useEffect } from 'react'
import { Button } from '@chakra-ui/button'
import { Box, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { Skeleton, SkeletonCircle } from '@chakra-ui/skeleton'

import { useWallet } from 'hook'

import useStyles from './CardToken.styles'

export const CardToken = () => {
  const styles = useStyles()
  const { tokenDetails, isTokenDetailLoading, getTokenDetails } = useWallet()

  useEffect(() => {
    getTokenDetails()
  }, [getTokenDetails])

  if (isTokenDetailLoading) {
    return (
      <Box __css={styles.container}>
        <Flex justifyContent="center">
          <SkeletonCircle size="14" />
        </Flex>
        <Flex textAlign="center" marginTop="10px" justifyContent="center">
          <Skeleton width="50px" height="15px" />
        </Flex>

        <Flex
          justifyContent="center"
          marginTop="60px"
          flexDirection="column"
          alignItems="center"
        >
          <Skeleton width="80px" height="25px" />
          <Skeleton width="100px" height="15px" marginTop="10px" />
        </Flex>

        <Flex justifyContent="center" gap="24px" marginTop="30px">
          <Skeleton width="100px" height="40px" />
          <Skeleton width="100px" height="40px" />
        </Flex>
      </Box>
    )
  }

  return (
    <Box __css={styles.container}>
      <Flex justifyContent="center">
        <Image
          src={tokenDetails?.srcImage}
          alt="imageToken"
          boxSize="60px"
          borderRadius="200px"
        />
      </Flex>
      <Box
        textAlign="center"
        marginTop="5px"
        color="white"
        fontSize="14px"
        fontWeight="400"
      >
        {tokenDetails?.nameToken}
      </Box>
      <Box __css={styles.balance1}>
        {tokenDetails?.displayBalance} {tokenDetails?.symbol}
      </Box>
      <Box __css={styles.balance2}>~1.000.000 VND</Box>

      <Flex __css={styles.wrapBtn2}>
        <Button fontWeight="500">Send</Button>
        <Button fontWeight="500">Receive</Button>
      </Flex>
    </Box>
  )
}
