// import { Box, Text, Flex } from '@chakra-ui/layout'
import { useEffect } from 'react'
import { Button } from '@chakra-ui/button'
import { Box, Flex } from '@chakra-ui/layout'
import { Skeleton, SkeletonCircle } from '@chakra-ui/skeleton'
import { useRouter } from 'next/router'

import { Avatar, ICopy, IQRCode } from 'components'
import { shortContract } from 'helper'
import { useAuth } from 'hook'
import { PATH_WALLET } from 'config'

import useStyles from './CardUser.styles'

export const CardUser = () => {
  const styles = useStyles()
  const { user, balanceUser, isBalanceLoading, handleGetBalanceUser } =
    useAuth()
  const router = useRouter()

  useEffect(() => {
    handleGetBalanceUser()
  }, [handleGetBalanceUser])

  if (isBalanceLoading) {
    return (
      <Box __css={styles.container}>
        <Box position="relative">
          <Flex justifyContent="center">
            <SkeletonCircle size="20" />
          </Flex>

          <Box position="absolute" top="0" left="92%">
            <Skeleton width="30px" height="30px" />
          </Box>
        </Box>

        <Flex justifyContent="center">
          <Skeleton height="15px" width="60px" marginTop="10px" />
        </Flex>

        <Flex
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Skeleton width="100px" height="20px" marginTop="60px" />
          <Skeleton width="100px" height="10px" marginTop="10px" />
        </Flex>

        <Flex gap="20px" justifyContent="center" marginTop="30px">
          <Skeleton width="100px" height="20px" />
          <Skeleton width="100px" height="20px" />
        </Flex>

        <Flex gap="20px" justifyContent="center" marginTop="30px">
          <Skeleton width="150px" height="40px" />
          <Skeleton width="150px" height="40px" />
        </Flex>
      </Box>
    )
  }

  return (
    <Box __css={styles.container}>
      <Box position="relative">
        <Avatar
          src="https://www.w3schools.com/howto/img_avatar.png"
          userName={
            user?.userName
              ? user.userName
              : 'Unnamed' + Math.floor(Math.random() * 1000)
          }
        />
        <Box position="absolute" top="0" left="92%">
          <IQRCode width={24} color="#B9EEE2" />
        </Box>
      </Box>
      <Box __css={styles.balance1}>{balanceUser} VNG</Box>
      <Box __css={styles.balance2}>~1.000.000 VND</Box>

      <Flex __css={styles.wrapBtn1}>
        <Button
          bg="green.20"
          color="green.50"
          width="90px"
          height="26px"
          fontWeight="500"
        >
          {shortContract(user?.walletAddress || '', 3, 3)}{' '}
          <ICopy marginLeft="5px" />
        </Button>
        <Button
          bg="green.20"
          color="green.50"
          width="90px"
          height="26px"
          fontWeight="500"
        >
          Explore
        </Button>
      </Flex>

      <Flex __css={styles.wrapBtn2}>
        <Button
          fontWeight="500"
          onClick={() => router.push(`${PATH_WALLET}/token/send`)}
        >
          Send
        </Button>
        <Button
          fontWeight="500"
          onClick={() => router.push(`${PATH_WALLET}/receive-qr-code`)}
        >
          Receive
        </Button>
      </Flex>
    </Box>
  )
}
