import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    tabContainer: {
      display: 'flex',
    },
    tabList1: {
      height: '439px',
      display: 'flex',
      flexDirection: 'column',
    },
    tabItem: {
      height: '60px',
      justifyContent: 'flex-start !important',
    },
    boxItem: {
      marginRight: '16px',
      padding: 2,
      borderRadius: '8px',
    },
    accordionStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      backgroundColor: 'blue',
    },
    boxStyle: {
      marginRight: '16px',
      padding: 2,
      borderRadius: '8px',
    },
  }

  return styles
}
