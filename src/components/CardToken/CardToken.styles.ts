import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    container: {
      width: '400px',
      height: '470px',
      background:
        'linear-gradient(17.45deg, #8CE2CF 11.25%, #74CDBA 32.37%, #11A083 55.48%, #018582 87.77%)',
      boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.03)',
      borderRadius: '20px',
      padding: '24px',
    },

    balance1: {
      fontWeight: '700',
      fontSize: '24px',
      color: 'white',
      textAlign: 'center',
      marginTop: '48px',
    },

    balance2: {
      fontWeight: '400',
      fontSize: '12px',
      color: 'white',
      textAlign: 'center',
    },

    wrapBtn2: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '24px',
    },
  }

  return styles
}
