import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    addressItemName: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '16px',
      color: 'inkGray.60',
    },
    addressItemToken: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '14px',
      color: 'inkGray.40',
    },
    addressItemTitle: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '18px',
      color: 'inkGray.60',
      marginY: 'auto',
      width: '100px',
    },
    addressItemTitleEdit: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '18px',
      color: 'inkGray.60',
      marginY: 'auto',
      width: '110px',
      paddingX: '.5rem',
      height: '2rem',
    },
  }

  return styles
}
