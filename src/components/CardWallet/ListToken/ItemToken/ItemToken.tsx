import { Flex, Box, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { useRouter } from 'next/router'
import { SkeletonCircle, Skeleton } from '@chakra-ui/skeleton'

import { IArrowRight } from 'components'
import { PATH_WALLET } from 'config'

import { IItemTokenProps } from './ItemToken.type'

export const ItemToken = (props: IItemTokenProps) => {
  const { tokenData, isLoading } = props
  const router = useRouter()

  if (isLoading) {
    return (
      <Flex
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="skyGray.40"
        padding="15px 0"
      >
        <Flex alignItems="center">
          <SkeletonCircle size="10" />
          <Skeleton width="100px" height="20px" marginLeft="15px" />
        </Flex>

        <Flex alignItems="center">
          <Box marginRight="20px">
            <Skeleton width="80px" height="10px" />
            <Skeleton width="80px" height="10px" marginTop="5px" />
          </Box>
          <SkeletonCircle size="4" />
        </Flex>
      </Flex>
    )
  }
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid"
      borderColor="skyGray.40"
      padding="15px 0"
      cursor="pointer"
      onClick={() =>
        router.push(`${PATH_WALLET}/token/${tokenData?.contractAddress}`)
      }
    >
      <Flex alignItems="center">
        <Image src={tokenData?.srcImage} alt="icon" boxSize="30px" />
        <Box
          marginLeft="8px"
          fontSize="14px"
          fontWeight="500"
          color="inkGray.60"
        >
          {tokenData?.nameToken}
        </Box>
      </Flex>

      <Flex alignItems="center">
        <Box marginRight="20px" textAlign="right">
          <Text fontSize="14px" color="inkGray.60">
            {tokenData?.displayBalance} {tokenData?.symbol}
          </Text>
          <Text fontSize="12px" fontWeight="400" color="inkGray.40">
            ~ 6.431.752.947 VND
          </Text>
        </Box>
        <IArrowRight />
      </Flex>
    </Flex>
  )
}
