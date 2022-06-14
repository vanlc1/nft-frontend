import { CSSObject } from '@chakra-ui/styled-system'

export const useStyles = () => {
  const styles: Record<string, CSSObject> = {
    wrap: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    wrapAvatar: {
      background: 'white',
      width: 'fit-content',
      borderRadius: '200px',
      padding: '5px',
    },

    userName: {
      color: 'white',
      marginTop: '3px',
      fontSize: '14px',
      fontWeight: '400',
    },
  }

  return styles
}
