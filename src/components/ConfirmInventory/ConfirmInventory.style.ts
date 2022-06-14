import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    flexStyle: {
      display: 'flex',
      backgroundColor: 'gray.30',
      borderRadius: '10px',
      border: '1px solid',
      borderColor: 'gray.50',
      padding: '5px 15px',
      alignItems: 'center',
    },
    imageStyle: {
      height: '28px',
      width: '28px',
      borderRadius: '50%',
      padding: '1px',
      border: '1px solid #1BE3B4',
      marginRight: '8px',
    },
    boxStyle: {
      marginBottom: '82px',
      textAlign: 'center',
      fontSize: '32px',
      fontWeight: '600',
    },
  }

  return styles
}
