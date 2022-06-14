import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    filterOption: {
      display: 'flex',
      flexFlow: 'row nowrap',
      marginBottom: '16px',
    },
    checkBox: {
      boxSize: '24px',
      marginRight: '16px',
      pointerEvents: 'none',
    },
    applyButton: {
      paddingY: '6px',
      paddingX: '16px',
      borderRadius: '10px',
      backgroundColor: 'green.50',
      color: 'skyGray.10',
    },
  }

  return styles
}
