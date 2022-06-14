import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    filterBox: {
      width: {
        base: '150px',
        sm: '150px',
        md: '200px',
        lg: '250px',
      },
      height: '40px',
      marginTop: '24px',
      marginRight: '24px',
    },
    filterBoxButton: {
      width: '100%',
      padding: '9px 16px',
      border: '1px solid',
      borderColor: 'skyGray.50',
      borderRadius: '10px',
      backgroundColor: 'skyGray.10',

      fontWeight: '400',
      fontSize: '14px',
      color: 'inkGray.60',
    },
    filterBoxExpand: {
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'flex-start',
      justifyContent: 'space-evenly',
      padding: '12px',
      border: '1px solid',
      borderColor: 'green.10',
      borderRadius: '8px',

      backgroundColor: 'skyGray.10',
      fontWeight: '400',
      fontSize: '14px',
      color: 'inkGray.60',
    },
  }

  return styles
}
