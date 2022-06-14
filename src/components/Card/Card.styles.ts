import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    cardContainer: {
      display: 'flex',
      flexFlow: 'column wrap',
      gap: '8px 0',
      margin: '0 auto',
      backgroundColor: 'white',
    },
    cardHeading: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 'calc(28 / 16)',
      color: 'gray.60',
    },
    cardContent: {
      height: '100%',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 'calc(22 / 14)',
      color: 'gray.50',
      overflowY: 'auto',
      '&::-webkit-scrollbar': {
        width: '10px',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: '#ebebeb',
        borderRadius: '10px',
      },
      '::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        background: '#C0C3C9',
      },
    },
  }

  return styles
}
