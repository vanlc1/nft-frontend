import { Box } from '@chakra-ui/layout'

import { ICopy, IVerfiedAcc } from 'components'
import { baseTheme } from 'themes'

import useStyles from './NFTDetailCardInfoMain.styles'
import { NFTDetailCardInfoMainProps } from './NFTDetailCardInfoMain.types'

export const NFTDetailCardInfoMain = (props: NFTDetailCardInfoMainProps) => {
  const { displayToast, setDisplayToast, nftItem } = props
  console.log(nftItem) // TODO
  const styles = useStyles()
  const infoCreatedBy = nftItem.authorName
  const infoTokenId = nftItem.tokenId
  const infoContactAddress = nftItem.authorContact
  const infoTokenStandard = nftItem.tokenStandard

  // functions
  const copyToClipboard = async (value: string) => {
    navigator.clipboard.writeText(value)
    setDisplayToast(displayToast + 1)
  }

  // other stuff
  const isVerfied = true

  return (
    <>
      <Box __css={styles.infoColContainer}>
        <Box __css={styles.infoGroup}>
          <Box __css={styles.infoLower}>Created by</Box>
          <Box __css={styles.infoValContainer}>
            <Box __css={styles.infoVal}>{infoCreatedBy}</Box>
            {isVerfied && (
              <IVerfiedAcc marginLeft="4px" width="16px" height="17px" />
            )}
          </Box>
        </Box>
        <Box __css={styles.infoGroup}>
          <Box __css={styles.infoLower}>Token ID</Box>
          <Box __css={styles.infoValContainer}>
            <Box __css={styles.infoVal}>{infoTokenId}</Box>
          </Box>
        </Box>
      </Box>
      <Box __css={styles.infoColContainer}>
        <Box __css={styles.infoGroup}>
          <Box __css={styles.infoLower}>Contact address</Box>
          <Box __css={styles.infoValContainer}>
            <Box __css={styles.infoVal}>{infoContactAddress}</Box>
            <ICopy
              marginLeft="4px"
              cursor="pointer"
              fillColor={baseTheme.colors.inkGray['60']}
              onClick={() => {
                copyToClipboard(infoContactAddress)
              }}
            />
          </Box>
        </Box>
        <Box __css={styles.infoGroup}>
          <Box __css={styles.infoLower}>Token Standard</Box>
          <Box __css={styles.infoValContainer}>
            <Box __css={styles.infoVal}>{infoTokenStandard}</Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
