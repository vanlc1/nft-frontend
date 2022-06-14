import { CSSObject } from '@chakra-ui/styled-system'

const styleButtonCommon = {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  height: '32px',
  width: 'fit-content',
  padding: '5px 8px',
  borderRadius: '10px',
  fontWeight: '500',
  fontSize: '14px',
}

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    mainContainer: {
      display: 'flex',
      flexFlow: 'column nowrap',
      width: '400px',
      height: '470px',
      marginTop: '24px',
      borderRadius: '20px',
      backgroundColor: 'skyGray.10',
    },
    layoutContainer: {
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      padding: '24px',
      width: '100%',
      height: '100%',
    },
    emailWarningContainer: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '13px 4px 0px 4px',
    },
    emailWarning: {
      marginLeft: '8px',
      color: 'red.50',
      fontWeight: '400',
      fontSize: '12px',
    },
    buttonContainer: {
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      marginTop: '13px',
    },
    buttonDisabled: {
      ...styleButtonCommon,
      color: 'inkGray.40',
      backgroundColor: 'skyGray.40',
    },
    buttonAvailable: {
      ...styleButtonCommon,
      color: 'skyGray.10',
      backgroundColor: 'green.50',
      cursor: 'pointer',
    },
    idStatusContainer: {
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: '10px 0px 10px 0px',
      marginTop: '16px',
      borderTop: '1px dashed',
      borderBottom: '1px dashed',
      borderColor: 'skyGray.50',
      color: 'inkGray.60',
      fontSize: '24px',
      fontWeight: '700',
    },
  }

  return styles
}
