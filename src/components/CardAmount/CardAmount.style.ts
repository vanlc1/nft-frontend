import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    boxWrapperStyle: {
      height: 'auto',
      maxWidth: '450px',
      backgroundColor: '#fff',
      borderRadius: '20px',
    },
    box1ChildStyle: {
      height: '100%',
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'column',
    },
    box2ChildStyle: {
      marginTop: '12px',
      height: '10px',
      borderTop: '1px solid #E0E0E4',
    },
    boxRederGasStyle: {
      marginTop: '12px',
      height: '10px',
      borderTop: '1px dashed #E0E0E4',
    },
    boxUseMaxStyle: {
      width: 'auto',
      fontSize: '14px',
      marginRight: '13px',
      color: '#18AA8C',
      cursor: 'pointer',
    },
    toolTipStyle: {
      background: '#E1EDFA',
      fontSize: '10px',
      fontWeight: '400',
      color: '#007AFF',
      maxWidth: '215px',
      padding: '8px 12px',
      textAlign: 'center',
    },
  }

  return styles
}
