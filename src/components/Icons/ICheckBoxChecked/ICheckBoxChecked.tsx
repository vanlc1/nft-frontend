import { Box } from '@chakra-ui/layout'

import { baseTheme } from 'themes'
import { ICheckBoxCheckedProps } from './ICheckBoxChecked.type'

export const ICheckBoxChecked = (props: ICheckBoxCheckedProps) => {
  const { ...rest } = props

  return (
    <Box {...rest}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.66667 0H21.3333C22.8 0 24 1.2 24 2.66667V21.3333C24 22.8 22.8 24 21.3333 24H2.66667C1.2 24 0 22.8 0 21.3333V2.66667C0 1.2 1.2 0 2.66667 0ZM8.71856 17.6338C9.19254 18.1221 9.95821 18.1221 10.4322 17.6338L19.6445 8.13146C20.1185 7.64319 20.1185 6.85446 19.6445 6.3662C19.1705 5.87793 18.4049 5.87793 17.9309 6.3662L9.5693 14.9797L6.06911 11.374C5.59512 10.8858 4.82946 10.8858 4.35547 11.374C4.12789 11.6079 4 11.9255 4 12.2567C4 12.5878 4.12789 12.9054 4.35547 13.1393L8.71856 17.6338Z"
          fill={baseTheme.colors.green['50']}
        />
      </svg>
    </Box>
  )
}
