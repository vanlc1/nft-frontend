import { BoxProps } from '@chakra-ui/layout'
import { INftDTO } from 'types'

export interface NFTDetailCardInfoProps extends BoxProps {
  nftItem: INftDTO
}
