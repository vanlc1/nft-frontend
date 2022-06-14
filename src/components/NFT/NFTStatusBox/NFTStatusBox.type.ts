import { BoxProps } from '@chakra-ui/layout'
import { INftDTO } from 'types'

export interface NFTStatusBoxProps extends BoxProps {
  nftItem: INftDTO
}
