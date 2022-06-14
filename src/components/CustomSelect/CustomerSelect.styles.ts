import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    wrapperMenu: {
      width: '250px',
      height: '40px',
      fontSize: '14px',
      border: '1px',
      borderColor: 'gray.50',
      borderRadius: '10px',
      textAlign: 'inherit',
      padding: '10px',
      display: 'flex',
    },
    menuListStyle: {
      width: '250px',
    },
  }

  return styles
}
