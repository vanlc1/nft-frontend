import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {}

  return styles
}

export const inputStyles = {
  focusBorderColor: 'green.50',
  borderColor: 'skyGray.50',
  placeholder: 'Type username or address',
  borderWidth: '1px',
  fontSize: '14px',
  borderRadius: '10px',
  color: 'inkGray.30',
  marginTop: '0px',
}
