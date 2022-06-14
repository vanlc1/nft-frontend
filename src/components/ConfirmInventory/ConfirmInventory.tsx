import { useEffect } from 'react'
import {
  Box,
  VStack,
  Heading,
  StackDivider,
  Flex,
  Text,
} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { useAuth } from 'hook'
import ConfirmInventoryPopup from './ConfirmInventoryPopup'
import useStyles from './ConfirmInventory.style'

type UserType = {
  userName: string
  image: string
  walletAddress: string
}

type SendInfoType = {
  tokenAmount?: number
  user?: UserType
}
const GAS_FEE = 0.01

export const ConfirmInventory = ({ sendInfo }: { sendInfo: SendInfoType }) => {
  const styles = useStyles()
  const { tokenAmount, user } = sendInfo
  const { handleGetBalanceUser, balanceUser } = useAuth()
  const max_token = balanceUser ? balanceUser : 0
  useEffect(() => {
    handleGetBalanceUser()
  }, [handleGetBalanceUser])
  const checkSendable =
    tokenAmount && tokenAmount + GAS_FEE > max_token ? false : true
  return (
    <Box maxWidth="450px" borderRadius="20px" backgroundColor="#fff">
      <VStack
        divider={<StackDivider margin="0 !important" borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <Heading padding="15px 25px" size="md">
          Confirm
        </Heading>
        <Box padding="25px" flexDirection="column" display="flex">
          <Box fontSize="14px">To</Box>
          <Flex __css={styles.flexStyle}>
            <Image
              src={user?.image}
              alt="user image"
              __css={styles.imageStyle}
            />
            <Flex flexDirection="column" width="100%">
              <Box fontSize="14px">{user?.userName}</Box>
              <Box color="inkGray.40" fontSize="12px">
                {user?.walletAddress}
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <VStack
            divider={<StackDivider border="1px dashed #E0E0E4" />}
            spacing={4}
            alignItems="flex-start"
            backgroundColor="skyGray.20"
            padding="15px 25px"
          >
            <Flex flexDirection="column">
              <Box fontSize="12px" color="grayy.40">
                Amount
              </Box>
              <Heading size="md">{tokenAmount} ETH</Heading>
              <Box fontSize="12px" color="grayy.40">
                ~ $1068.88
              </Box>
            </Flex>

            <Flex
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Box fontSize="12px" color="grayy.40">
                Estimated Gas Fee
              </Box>
              <Box fontSize="16px" fontWeight="600">
                {GAS_FEE} ETH
              </Box>
            </Flex>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Box fontSize="12px" color="grayy.40">
                Total Amount
              </Box>

              <Box fontSize="16px" fontWeight="600">
                {tokenAmount ? tokenAmount + GAS_FEE : null} ETH
              </Box>
            </Flex>
            {!checkSendable && (
              <Text fontSize="12px" fontWeight="400" color="#DC402B">
                You need {tokenAmount && tokenAmount + GAS_FEE - max_token} more
                ETH to complete this transaction
              </Text>
            )}
          </VStack>
          <Box padding="30px 54px">
            <ConfirmInventoryPopup disabled={!checkSendable} />
          </Box>
        </Box>
      </VStack>
    </Box>
  )
}
