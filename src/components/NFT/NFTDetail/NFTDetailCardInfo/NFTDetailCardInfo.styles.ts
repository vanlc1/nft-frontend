import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    mainContainer: {
      display: 'flex',
      flexFlow: 'column nowrap',
      width: '400px',
      height: '470px',
      marginTop: '24px',
      borderRadius: '20px',
      backgroundColor: 'skyGray.10',
    },
    layoutContainer: {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'center',
      padding: '24px',
    },
    extraInfoColoring: {
      backgroundColor: 'skyGray.20',
      height: '100%',
      width: '100%',
      borderBottomRadius: '20px',
    },
  }

  return styles
}
