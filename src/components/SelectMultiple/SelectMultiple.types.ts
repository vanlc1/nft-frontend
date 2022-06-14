import { BoxProps } from '@chakra-ui/layout'
import { CSSObject } from '@chakra-ui/styled-system'
import { InterfaceValueLabel } from 'components'
import { Dispatch, SetStateAction } from 'react'

export interface SelectMultipleProps extends BoxProps {
  placeholder: string
  selections: InterfaceValueLabel[]
  options: InterfaceValueLabel[]
  setSelections: Dispatch<SetStateAction<InterfaceValueLabel[]>>
  buttonStyle?: CSSObject
  expandStyle?: CSSObject
}
