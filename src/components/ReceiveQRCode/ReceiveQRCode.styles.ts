import { CSSObject } from '@chakra-ui/styled-system'
import { baseTheme } from 'themes'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    container: {
      marginTop: '17px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },

    content: {
      borderRadius: '10px',
      backgroundColor: 'white',
      width: '450px',
      height: '540px',
      display: 'flex',
      flexDirection: 'column',
      boxshadow: '0px 4px 30px rgba(0, 0, 0, 0.03)',
      WebkitBoxShadow: '0px 4px 30px rgba(0, 0, 0, 0.03)',
    },

    header: {
      borderBottom: `1px solid ${baseTheme.colors.skyGray[60]}`,
    },

    title: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: '2.25rem',
      marginTop: '1rem',
      marginLeft: '1.5rem',
      marginBottom: '0.625rem',
      color: baseTheme.colors.inkGray[60],
    },

    body: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },

    qrcode: {
      width: '196px',
      height: '197px',
      marginTop: '38px',
      marginBottom: '36px',
      objectFit: 'cover',
    },

    note: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '22px',
      textAlign: 'center',
      color: baseTheme.colors.inkGray[50],
    },

    userPic: {
      width: '36px',
      height: '36px',
      padding: '1px',
      marginTop: '19px',
      objectFit: 'contain',
      borderRadius: 'full',
      border: '1px solid #1BE3B4',
    },

    username: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '22px',
      marginRight: '4px',
    },

    tokenContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '12px',
      borderRadius: '17px',
      px: '1rem',
      py: '2px',
      backgroundColor: baseTheme.colors.green[20],
    },

    token: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '22px',
      marginRight: '27px',
      color: baseTheme.colors.green[50],
    },
  }

  return styles
}
