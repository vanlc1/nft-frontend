import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    buttonStyle: {
      backgroundColor: 'red.50',
      padding: '10px 20px',
      borderRadius: '10px',
      color: '#fff',
      fontSize: '14px',
    },

    vStackStyle: {
      marginTop: '16px',
      alignItems: 'flex-start',
    },
    flexStyle: {
      alignItems: 'center',
      justifyContent: 'space-between',
      display: 'flex',
      height: '40px',
    },
    imageStyle: {
      marginRight: '15px',
      maxHeight: '40px',
    },
    textStyle: {
      fontSize: '14px',
    },
    boxWrapperPopup: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },
    headingPopupStyle: {
      lineHeight: '28px',
      marginTop: '26px',
      textAlign: 'center',
      fontWeight: '600',
    },
    box2Style: {
      fontSize: '14px',
      fontWeight: '400',
      color: 'grayy.40',
      marginTop: '8px',
      marginBottom: '24px',
      textAlign: 'center',
    },
    buttonPopup1Style: {
      fontWeight: '400',
      width: '100%',
      padding: '12px 15px',
      marginBottom: '15px',
      backgroundColor: 'green.50',
      color: '#fff',
      borderRadius: '10px',
    },
    buttonPopup2Style: {
      backgroundColor: '#fff',
      fontWeight: '400',
      marginBottom: '10px',
    },
  }

  return styles
}
