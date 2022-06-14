import { BoxProps } from '@chakra-ui/layout'
import { ITokenDTO } from 'types'

export interface IItemTokenProps extends BoxProps {
  tokenData?: ITokenDTO
  isLoading?: boolean
}
