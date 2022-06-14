import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    backButtonContainer: {
      display: 'flex',
      flexFlow: 'row nowrap',
      alignContent: 'center',
      justifyContent: 'flex-start',
      width: 'fit-content',
      cursor: 'pointer',
    },
    backButton: {
      width: 'fit-content',
      marginLeft: '5px',

      fontSize: 'h3',
      fontWeight: '600',
      color: 'inkGray.60',
    },
  }

  return styles
}
