import { BoxProps } from '@chakra-ui/layout'

export interface CoreLayoutProps extends BoxProps {
  maxW?: string
  bodyStyle?: {
    backgroundColor: string
  }
  pageStyle?: {
    backgroundColor?: string
    padding?: string
  }
}
