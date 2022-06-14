import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    infoColContainer: {
      width: '163px',
    },
    infoGroup: {
      marginBottom: '12px',
    },
    infoLower: {
      fontSize: '12px',
      fontWeight: '400',
      color: 'inkGray.40',
    },
    infoValContainer: {
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
    },
    infoVal: {
      fontSize: '14px',
      fontWeight: '400',
      color: 'inkGray.60',
    },
  }

  return styles
}
