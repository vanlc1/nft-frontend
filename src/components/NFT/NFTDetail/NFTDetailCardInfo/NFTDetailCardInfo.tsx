import { useState } from 'react'

import { Box } from '@chakra-ui/layout'

import {
  NFTDetailCardInfoMain,
  NFTDetailCardInfoExtra,
  ToastMessage,
} from 'components'

import useStyles from './NFTDetailCardInfo.styles'
import { NFTDetailCardInfoProps } from './NFTDetailCardInfo.types'

export const NFTDetailCardInfo = (props: NFTDetailCardInfoProps) => {
  const { nftItem } = props
  const styles = useStyles()
  const [displayToast, setDisplayToast] = useState(0)

  return (
    <Box __css={styles.mainContainer}>
      <ToastMessage
        title="Copied!"
        isClosable={true}
        position="top"
        duration={1500}
        status="success"
        displayToast={displayToast}
        setDisplayToast={() => setDisplayToast}
      />
      <Box __css={styles.layoutContainer} paddingBottom="4px">
        <NFTDetailCardInfoMain
          setDisplayToast={setDisplayToast}
          displayToast={displayToast}
          nftItem={nftItem}
        />
      </Box>

      <Box __css={styles.extraInfoColoring}>
        <Box
          __css={styles.layoutContainer}
          paddingTop="0px"
          paddingBottom="0px"
        >
          <NFTDetailCardInfoExtra nftItem={nftItem} />
        </Box>
      </Box>
    </Box>
  )
}
