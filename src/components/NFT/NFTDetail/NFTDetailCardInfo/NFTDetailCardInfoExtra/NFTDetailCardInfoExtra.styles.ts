import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    extraInfoTabButton: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingTop: '16px',
    },
    extraInfoTabButtonName: {
      textAlign: 'left',
      color: 'inkGray.60',
      fontSize: '16px',
      fontWeight: '600',
    },
    extraInfoTabContainer: {
      width: '100%',
      padding: '2px 16px 12px 16px',
      borderRadius: '10px',
      backgroundColor: 'skyGray.10',
    },
    extraInfoGroup: {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 0px',
    },
    extraInfoName: {
      fontSize: '12px',
      fontWeight: '400',
      color: 'inkGray.40',
      width: '100%',
    },
    infoVal: {
      fontSize: '14px',
      fontWeight: '400',
      color: 'inkGray.60',
    },
  }

  return styles
}
