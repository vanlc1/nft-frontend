import { CSSObject } from '@chakra-ui/styled-system'

export default function Styles() {
  const styles: Record<string, CSSObject> = {
    wrapBox: {
      alignItems: 'center',
      height: '100vh',
      justifyContent: 'center',
      display: 'flex',
      backgroundColor: 'gray.20',
      padding: '50px 200px',
    },

    BoxChild: {
      boxShadow: '0px 4px 30px #f0f0f0',
      borderRadius: '20px',
      height: '100%',
      width: '100%',
      padding: '0px',
    },
    dividerStyle: {
      height: '100%',
    },
  }

  return styles
}
