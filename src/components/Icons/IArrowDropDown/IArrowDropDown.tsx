import { Box } from '@chakra-ui/layout'

import { IArrowDropDownProps } from './IArrowDropDownProps.type'

export const IArrowDropDown = (props: IArrowDropDownProps) => {
  const { color, ...rest } = props
  const fillColor = color ? color : 'white'

  return (
    <Box {...rest}>
      <svg
        width="8"
        height="6"
        viewBox="0 0 8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.706145 2.4141L3.29615 5.0041C3.68615 5.3941 4.31615 5.3941 4.70615 5.0041L7.29614 2.4141C7.92615 1.7841 7.47614 0.704102 6.58614 0.704102H1.40615C0.516145 0.704102 0.0761452 1.7841 0.706145 2.4141Z"
          fill={fillColor}
        />
      </svg>
    </Box>
  )
}
