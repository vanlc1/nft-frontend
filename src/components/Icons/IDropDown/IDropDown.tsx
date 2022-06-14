import React from 'react'

import { Box } from '@chakra-ui/layout'

import { baseTheme } from 'themes'
import { IDropDownProps } from './IDropDown.types'

export const IDropDown = (props: IDropDownProps) => {
  const { color, ...rest } = props
  return (
    <Box {...rest}>
      <svg
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.2892 0.50002C10.8992 0.11002 10.2692 0.110019 9.87925 0.500019L5.99925 4.38002L2.11925 0.500019C1.72925 0.110019 1.09925 0.110019 0.709246 0.500019C0.319245 0.890019 0.319245 1.52002 0.709246 1.91002L5.29925 6.50002C5.68925 6.89002 6.31925 6.89002 6.70925 6.50002L11.2992 1.91002C11.6792 1.53002 11.6792 0.89002 11.2892 0.50002Z"
          fill={color ? color : baseTheme.colors.inkGray['60']}
        />
      </svg>
    </Box>
  )
}
