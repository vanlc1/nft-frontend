import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: 'skyGray.30',
    },
    middleContainer: {
      flexGrow: '1',
    },
    componentContainer: {},
  }

  return styles
}
