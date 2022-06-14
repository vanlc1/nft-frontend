import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    flexStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      h: '40px',
    },

    flex1ChildStyle: {
      display: 'flex',
      flexDirection: 'column',
    },
    flex3ChildStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
    },
    textStyle: {
      fontSize: '16px',
      fontWeight: '600',
    },
  }

  return styles
}
