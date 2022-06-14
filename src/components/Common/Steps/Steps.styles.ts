import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    stepItem: {
      display: 'flex',
      span: {
        fontSize: '14px',
        color: 'inkGray.30',
      },
      'div  div:first-child': {
        borderWidth: '1px',
        borderColor: 'inkGray.30',
        backgroundColor: 'skyGray.20',
      },
      '[aria-current]:not([aria-current="false"])': {
        span: {
          color: 'teal',
        },
      },
      '[aria-current]:not([aria-current="false"]):first-child': {
        background: 'white',
        borderWidth: '2px',
        borderColor: 'teal',
        span: {
          fontWeight: 'bold',
        },
      },
    },
  }

  return styles
}
