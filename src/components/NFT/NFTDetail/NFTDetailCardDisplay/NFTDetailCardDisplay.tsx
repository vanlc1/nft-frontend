import { Box } from '@chakra-ui/layout'
import { Link } from '@chakra-ui/react'

import { IDropDown, IError, NFTStatusBox } from 'components'
import { baseTheme } from 'themes'
import { NFT_STATE_IN_WALLET } from 'config'

import useStyles from './NFTDetailCardDisplay.styles'
import { NFTDetailCardDisplayProps } from './NFTDetailCardDisplay.types'

export const NFTDetailCardDisplay = (props: NFTDetailCardDisplayProps) => {
  const styles = useStyles()
  const { nftItem, isConfirming, setConfirm } = props

  const nftIsAvailable = nftItem.state === NFT_STATE_IN_WALLET
  const hasEmail = false

  return (
    <Box __css={styles.mainContainer}>
      <Box __css={styles.layoutContainer}>
        <Box
          background={`url(${nftItem.srcImage})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          borderRadius="20px"
          width="100%"
          height="100%"
        />
        {isConfirming || (
          <>
            {hasEmail || (
              <Box __css={styles.emailWarningContainer}>
                <IError />
                <Box __css={styles.emailWarning}>
                  Please provide email address to transfer your assets. You can
                  update your setting following{' '}
                  <Link
                    __css={styles.emailWarning}
                    color="red.50"
                    href=""
                    textDecor="underline"
                  >
                    this guide
                  </Link>
                </Box>
              </Box>
            )}
            <Box __css={styles.buttonContainer}>
              <Box
                __css={
                  (nftIsAvailable && hasEmail && styles.buttonAvailable) ||
                  styles.buttonDisabled
                }
                onClick={() => {}}
              >
                Transfer
              </Box>
              <Box
                __css={
                  (nftIsAvailable && hasEmail && styles.buttonAvailable) ||
                  styles.buttonDisabled
                }
                onClick={() => {}}
              >
                Place On Market
              </Box>
              <Box
                __css={
                  (nftIsAvailable && styles.buttonAvailable) ||
                  styles.buttonDisabled
                }
                onClick={() => setConfirm(!isConfirming)}
              >
                <Box>Send to DApps</Box>
                <IDropDown
                  color={baseTheme.colors.skyGray['10']}
                  width="auto"
                  height="auto"
                  marginLeft="6px"
                />
              </Box>
            </Box>
          </>
        )}
        <Box __css={styles.idStatusContainer}>
          <Box __css={styles.idContainer}>{nftItem.nftName}</Box>
          <Box __css={styles.statusContainer}>
            <NFTStatusBox nftItem={nftItem} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
