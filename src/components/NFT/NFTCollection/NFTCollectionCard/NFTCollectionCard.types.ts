import { BoxProps } from '@chakra-ui/layout'
import { INftDTO } from 'types'

export interface NFTCollectionCardProps extends BoxProps {
  nftItem: INftDTO
}
