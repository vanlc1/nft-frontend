import React, { useEffect } from 'react'
import { Box, Heading, VStack, StackDivider } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/skeleton'
import { useTokenHistory } from 'hook'
import useStyles from './CardHistory.style'
import { TransferItems } from './CardHistory.types'
import { CardItem } from './CardItemHistory'

export const CardHistory = () => {
  const styles = useStyles()
  const { tokenHistory, getTokenHistory, isTokenHistoryLoading } =
    useTokenHistory()

  useEffect(() => {
    getTokenHistory()
  }, [getTokenHistory])

  return (
    <Box __css={styles.box2Style}>
      <Heading color="green.50" marginBottom="8px" size="md">
        History
      </Heading>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        {tokenHistory.map((item: any, index) => {
          return (
            <Box key={index}>
              <Box>
                {!isTokenHistoryLoading ? (
                  <Box fontSize="14px" fontWeight="400">
                    {item.time.thu}, {item.time.final}
                  </Box>
                ) : (
                  <Box>
                    <Skeleton width="20%" height="20px" />
                  </Box>
                )}
                <VStack
                  divider={<StackDivider borderColor="gray.200" />}
                  spacing={4}
                  align="stretch"
                >
                  {item.content.length > 0
                    ? item.content.map((i: TransferItems, d: number) => {
                        return (
                          <Box key={d}>
                            <CardItem
                              items={i}
                              isLoading={isTokenHistoryLoading}
                            />
                          </Box>
                        )
                      })
                    : null}
                </VStack>
              </Box>
            </Box>
          )
        })}
      </VStack>
    </Box>
  )
}
