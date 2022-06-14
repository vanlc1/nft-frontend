import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    wrapIcon: {
      marginRight: '24px',
      border: '1px solid #E0E0E4',
      borderRadius: '10px',
      width: '44px',
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },

    wrapIcon2: {
      border: '1px solid #E0E0E4',
      borderRadius: '10px',
      width: '44px',
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
  }

  return styles
}
