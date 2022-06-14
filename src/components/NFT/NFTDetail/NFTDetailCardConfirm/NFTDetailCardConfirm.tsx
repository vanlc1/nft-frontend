import { Box, Flex } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'

import { ProfileCirc } from 'components'

import useStyles from './NFTDetailCardConfirm.styles'
import { NFTDetailCardConfirmProps } from './NFTDetailCardConfirm.types'

export const NFTDetailCardConfirm = (props: NFTDetailCardConfirmProps) => {
  const {} = props
  const styles = useStyles()
  const confirmDatAll = [
    {
      datName: 'Estimated Gas Fee',
      datVal: '0.01 ETH',
    },
    {
      datName: 'Total Amount',
      datVal: '0.54880664771 ETH',
    },
  ]

  return (
    <Flex
      flexFlow="column nowrap"
      width="400px"
      height="470px"
      marginTop="24px"
      borderRadius="20px"
      backgroundColor="skyGray.10"
    >
      <Box
        __css={styles.layoutContainer}
        paddingTop="16px"
        paddingBottom="16px"
      >
        <Box __css={styles.confirmTitle}>Confirm</Box>
      </Box>
      <Box borderTop="1px solid" borderTopColor="skyGray.50">
        <Box
          __css={styles.layoutContainer}
          paddingTop="24px"
          paddingBottom="33px"
        >
          <Box __css={styles.infoVal}>To</Box>
          <Box __css={styles.confirmContactContainer}>
            <ProfileCirc
              src="/assets/images/profilePic.svg"
              width="32px"
              height="32px"
            />
            <Box marginLeft="8px">
              <Box __css={styles.infoVal}>QUOCANH</Box>
              <Box __css={styles.infoLower}>0xifoiaweifwiwrgnsadasds</Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box __css={styles.extraInfoColoring}>
        <Box
          __css={styles.layoutContainer}
          paddingTop="16px"
          paddingBottom="0px"
        >
          <Box __css={styles.confirmDatAll}>
            {confirmDatAll.map((confirmDat, index) => (
              <Box
                key={confirmDat.datName}
                __css={styles.confirmDatGroup}
                borderBottom={
                  index === confirmDatAll.length - 1 ? 'none' : '1px dashed'
                }
                borderBottomColor="skyGray.50"
              >
                <Box __css={styles.confirmDatName}>{confirmDat.datName}</Box>
                <Box __css={styles.confirmDatVal}>{confirmDat.datVal}</Box>
              </Box>
            ))}
          </Box>
          <Button
            fontWeight="500"
            fontSize="14px"
            height="44px"
            width="100%"
            borderRadius="10px"
          >
            Continue on mobile app
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}
