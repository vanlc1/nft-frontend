import { BoxProps } from '@chakra-ui/layout'
import { INftDTO } from 'types'

export interface NFTDetailCardConfirmProps extends BoxProps {
  nftItem: INftDTO
}
