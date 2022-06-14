import { useEffect, useState } from 'react'

import { Box } from '@chakra-ui/layout'

import {
  BackButton,
  NFTDetailCardConfirm,
  NFTDetailCardDisplay,
  NFTDetailCardInfo,
} from 'components'
import { useWallet } from 'hook'

import useStyles from './NFTDetail.styles'

export const NFTDetail = () => {
  //Declarations
  const styles = useStyles()
  const [isConfirming, setIsConfirming] = useState(false)

  // Fetch data
  const { nftDetail, getNFTDetails } = useWallet()
  useEffect(() => {
    getNFTDetails()
  }, [getNFTDetails])

  return (
    <>
      {nftDetail && (
        <>
          <BackButton text={nftDetail.nftName} marginTop="40px" />
          <Box __css={styles.nftDetailWrapper}>
            <Box __css={styles.nftDetailCardsContainer}>
              <NFTDetailCardDisplay
                nftItem={nftDetail}
                isConfirming={isConfirming}
                setConfirm={setIsConfirming}
              />

              {(isConfirming && (
                <NFTDetailCardConfirm nftItem={nftDetail} />
              )) || <NFTDetailCardInfo nftItem={nftDetail} />}
            </Box>
          </Box>
        </>
      )}
    </>
  )
}
