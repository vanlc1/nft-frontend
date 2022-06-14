import { BoxProps } from '@chakra-ui/layout'
import { INftDTO } from 'types'

export interface NFTDetailCardInfoExtraProps extends BoxProps {
  nftItem: INftDTO
}
