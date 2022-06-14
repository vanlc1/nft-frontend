import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    boxWrapperStyle: {
      height: '30px',
      width: '30px',
      backgroundColor: '#B9EEE2',
      borderRadius: '4px',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      marginRight: '8px',
    },
    box2Style: {
      padding: '24px',
      width: '400px',
      maxWidth: '400px',
      backgroundColor: '#fff',
      borderRadius: '20px',
      maxHeight: '470px',
      overflow: 'auto',
    },
  }

  return styles
}
