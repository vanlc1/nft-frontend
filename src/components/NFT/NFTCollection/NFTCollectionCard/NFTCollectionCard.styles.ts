import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    container: {
      width: '188px',
      height: '235px',
      border: '1px solid',
      borderColor: 'green.20',
      borderRadius: '10px',
      backgroundColor: 'skyGray.10',
    },
    textContainer: {
      width: '100%',
      padding: '10px',
    },
    nftName: {
      fontSize: '14px',
      fontWeight: '500',
      color: 'inkGray.60',
    },
  }

  return styles
}
