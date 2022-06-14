import { Dispatch, SetStateAction } from 'react'
import { BoxProps } from '@chakra-ui/layout'
import { INftDTO } from 'types'

export interface NFTDetailCardDisplayProps extends BoxProps {
  nftItem: INftDTO
  isConfirming: boolean
  setConfirm: Dispatch<SetStateAction<boolean>>
}
