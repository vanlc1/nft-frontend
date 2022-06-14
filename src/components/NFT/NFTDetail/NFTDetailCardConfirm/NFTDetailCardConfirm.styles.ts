import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    layoutContainer: {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'center',
      padding: '24px',
    },
    // CONFIRM
    confirmTitle: {
      fontSize: '24px',
      fontWeight: '700',
      color: 'inkGray.60',
    },
    confirmContactContainer: {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      padding: '6px 16px',
      marginTop: '8px',
      border: '1px solid',
      borderRadius: '10px',
      borderColor: 'skyGray.50',
      backgroundColor: 'skyGray.30',
    },
    infoVal: {
      fontSize: '14px',
      fontWeight: '400',
      color: 'inkGray.60',
    },
    infoLower: {
      fontSize: '12px',
      fontWeight: '400',
      color: 'inkGray.40',
    },
    confirmDatAll: {
      width: '100%',
      height: '168px',
    },
    confirmDatGroup: {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: '16px',
      paddingBottom: '16px',
    },
    confirmDatName: {
      fontSize: '12px',
      fontWeight: '400',
      color: 'inkGray.40',
    },

    confirmDatVal: {
      fontSize: '16px',
      fontWeight: '600',
      color: 'inkGray.60',
    },
  }

  return styles
}
