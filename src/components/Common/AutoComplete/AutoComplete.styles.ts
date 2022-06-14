import { CSSObject } from '@chakra-ui/styled-system'
import { BoxProps, InputProps } from '@chakra-ui/react'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    autocomplete: {
      '.chakra-stack + chakra-stack': {
        display: 'none',
      },
      '.css-nq00bg': {
        display: 'none',
      },
      '.css-efk3t2': {
        position: 'absolute',
        width: '100%',
      },
      '.css-x9juev': {
        zIndex: 3,
        marginTop: '0px',
      },
      '.css-1t76nhg': {
        border: '0px',
      },
    },
  }

  return styles
}

export const inputProps: InputProps = {
  focusBorderColor: 'green.50',
  borderColor: 'skyGray.50',
  placeholder: 'Type username or address',
  borderWidth: '1px',
  fontSize: '14px',
  borderRadius: '10px',
  color: 'inkGray.30',
  marginTop: '0px',
}

export const labelProps = {
  display: 'none',
}

export const listStyleProps: BoxProps = {
  position: 'absolute',
  width: '100%',
  top: '36px',
  zIndex: 9999,
  color: 'grayy.60',
  boxShadow: 'none',
}

export const listItemProps: BoxProps = {}

export const tagProps: BoxProps = {
  display: 'none',
}
