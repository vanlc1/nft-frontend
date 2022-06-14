import { Box } from '@chakra-ui/react'
import { NFTStatusBox } from 'components'

import useStyles from './NFTCollectionCard.styles'
import { NFTCollectionCardProps } from './NFTCollectionCard.types'

export const NFTCollectionCard = (props: NFTCollectionCardProps) => {
  const styles = useStyles()
  const { nftItem, ...rest } = props

  return (
    <Box __css={styles.container} {...rest}>
      <Box
        background={`url(${nftItem.srcImage})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        borderTopRadius="9px"
        width="100%"
        height="75%"
      />
      <Box __css={styles.textContainer}>
        <NFTStatusBox nftItem={nftItem} />
        <Box __css={styles.nftName}>{nftItem.nftName}</Box>
      </Box>
    </Box>
  )
}
