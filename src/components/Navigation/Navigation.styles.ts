import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    container: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '80px',
      width: '100%',
      borderBottom: '1px',
      borderBottomColor: 'skyGray.40',
      backgroundColor: 'skyGray.20',
    },
    homeContainer: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      cursor: 'pointer',
    },
    logo: {
      objectFit: 'cover',
      marginRight: '10px',
      width: '55px',
    },
    walletName: {
      fontSize: {
        base: '14px',
        sm: '14px',
        md: '16px',
        lg: '20px',
      },
      color: 'green.50',
      fontWeight: 'bold',
    },
    navAllContainer: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
    },
    navAlignContainer: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      marginLeft: {
        base: '0px',
        sm: '5px',
        md: '5px',
        lg: '40px',
      },
      cursor: 'pointer',
    },
    navContainer: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    navIcon: {},
    nav: {
      marginLeft: {
        base: '1px',
        sm: '1px',
        md: '9px',
        lg: '9px',
      },
      fontSize: {
        base: '12px',
        sm: '12px',
        md: '14px',
        lg: '14px',
      },

      color: 'inkGray.50',

      fontWeight: 'normal',
    },
    menuContainer: {
      marginLeft: {
        base: '3px',
        sm: '10px',
        md: '20px',
        lg: '80px',
      },
    },
    menuButton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuButtonArrowDropDown: {
      display: { base: 'none', sm: 'none', md: 'block', lg: 'block' },
    },
    menuBoxContainer: {
      width: '240px',
      height: `${230 - (248 - 230)}px`,
      padding: '8px 16px 0px 16px',
    },
    accContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingBottom: '12px',
    },
    accName: {
      fontSize: { base: '16px', lg: '16px' },
      fontWeight: 'bold',
      color: 'inkGray.60',
    },
    accEmail: {
      fontSize: { base: '12px', lg: '12px' },
      fontWeight: 'normal',
      color: 'inkGray.40',
    },
    userPrefContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: 'fit-content',
      padding: '12px 0px 12px 0px',
      cursor: 'pointer',
    },
    userPref: {
      marginLeft: '8px',
      fontSize: { base: '14px', lg: '14px' },
      fontWeight: 'normal',
      color: 'inkGray.60',
    },
    menuDivide: {
      width: '208px',
      borderBottom: '1px solid',
      borderColor: 'skyGray.30',
    },
  }

  return styles
}
