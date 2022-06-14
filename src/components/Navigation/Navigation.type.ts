import { BoxProps } from '@chakra-ui/layout'

export interface NavigationProps extends BoxProps {
  location: string
  padding: {
    base: string
    sm: string
    md: string
    lg: string
  }
}
