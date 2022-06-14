import { BoxProps } from '@chakra-ui/layout'
import { Dispatch, SetStateAction } from 'react'
import { INftDTO } from 'types'

export interface NFTDetailCardInfoMainProps extends BoxProps {
  displayToast: number
  setDisplayToast: Dispatch<SetStateAction<number>>
  nftItem: INftDTO
}
