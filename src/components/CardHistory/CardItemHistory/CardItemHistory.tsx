import React from 'react'
import { Flex, Box } from '@chakra-ui/layout'
import { Skeleton, SkeletonText } from '@chakra-ui/skeleton'
import { useTokenHistory } from 'hook'
import { SENT } from 'config'
import { shortContract } from 'helper'
import { ISend, IReceived } from 'components'
import { TransferItems } from '../CardHistory.types'
import useStyles from '../CardHistory.style'

interface Props {
  items: TransferItems
  isLoading: boolean
}
export const CardItem = (props: Props) => {
  const { items, isLoading } = props
  const styles = useStyles()
  const { handleSetStatus } = useTokenHistory()
  if (isLoading) {
    return (
      <Flex justifyContent="space-between">
        <Flex alignItems="center">
          <Box>
            <Skeleton width="30px" height="30px" marginTop="10px" />
          </Box>

          <Flex marginLeft="10px" flexDirection="column">
            <Box>
              <SkeletonText noOfLines={1} width="40px" marginTop="10px" />
            </Box>
            <Box>
              <SkeletonText noOfLines={1} width="140px" marginTop="10px" />
            </Box>
          </Flex>
        </Flex>

        <Box>
          <Flex alignItems="flex-end" flexDirection="column">
            <Box>
              <SkeletonText noOfLines={1} width="40px" marginTop="10px" />
            </Box>
            <Box>
              <SkeletonText noOfLines={1} width="40px" marginTop="10px" />
            </Box>
          </Flex>
        </Box>
      </Flex>
    )
  }
  return (
    <Flex justifyContent="space-between">
      <Flex alignItems="center">
        <Box __css={styles.boxWrapperStyle}>
          {handleSetStatus(items.sentAddress) === SENT ? (
            <ISend />
          ) : (
            <IReceived />
          )}
        </Box>

        <Flex flexDirection="column">
          <Box lineHeight="22px" fontSize="14px">
            {handleSetStatus(items.sentAddress)}
          </Box>
          <Box lineHeight="18px" color="grayy.40" fontSize="12px">
            {handleSetStatus(items.sentAddress) === SENT
              ? shortContract(items.receivedAddress, 8, 11)
              : shortContract(items.sentAddress, 8, 11)}
          </Box>
        </Flex>
      </Flex>

      <Box>
        <Flex alignItems="flex-end" flexDirection="column">
          <Box fontWeight="600" fontSize="16px">
            {handleSetStatus(items.sentAddress) === SENT ? '- ' : '+ '}
            {parseInt(items.tokenAmount) / Math.pow(10, 18)}
          </Box>
          <Box fontSize="12px" color="grayy.40" fontWeight="400">
            {items.tokenSymbol}
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
