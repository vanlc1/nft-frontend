import { Box } from '@chakra-ui/layout'
import { ILockLocked, ILockOpen } from 'components'
import { NFT_STATE_IN_WALLET } from 'config'
import { getTextNFTState } from 'helper'

import useStyles from './NFTStatusBox.styles'
import { NFTStatusBoxProps } from './NFTStatusBox.type'

export const NFTStatusBox = (props: NFTStatusBoxProps) => {
  const styles = useStyles()
  const { nftItem } = props

  const nftIsAvailable = nftItem.state === NFT_STATE_IN_WALLET

  return (
    <>
      <Box
        __css={
          nftIsAvailable
            ? styles.statusContainerAvailable
            : styles.statusContainerUnavailable
        }
      >
        {(nftIsAvailable && <ILockOpen __css={styles.statusLockIcon} />) || (
          <ILockLocked __css={styles.statusLockIcon} />
        )}
        <Box
          __css={
            nftIsAvailable
              ? styles.statusTxtAvailable
              : styles.statusTxtUnavailable
          }
        >
          {getTextNFTState(nftItem.state)}
        </Box>
      </Box>
    </>
  )
}
