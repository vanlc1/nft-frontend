import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    fileUploaderContainer: {},
    fileCard: {
      padding: '1em',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: '1px',
      borderStyle: 'dashed',
      borderColor: 'green.50',
      backgroundColor: 'green.10',
      borderRadius: '10px',
      minWidth: '352px',
      minHeight: '130px',
      cursor: 'pointer',
    },
    fileItems: {
      display: 'flex',
      flexFlow: 'row wrap',
      padding: '1em',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderWidth: '1px',
      borderStyle: 'dashed',
      borderColor: 'green.50',
      backgroundColor: 'green.10',
      borderRadius: '10px',
      minWidth: '352px',
      minHeight: '130px',
      cursor: 'pointer',
      gap: '4.5px',
    },
    fileInput: {
      position: 'relative',
      marginBottom: '9px',

      input: {
        position: 'relative',
        textAlign: 'right',
        opacity: '0',
        height: '46px',
        maxWidth: '200px',
      },
      button: {
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        zIndex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        color: '#fff',
        backgroundColor: 'green.10',
        fontSize: '1.1rem',
        borderRadius: '4px',
        border: 'none',
        outline: 'none',
        transition: 'backgroundColor 0.4s',
      },
    },
    fileAcceptType: {
      p: {
        fontSize: '14px',
        color: 'green.50',
        u: {
          textUnderlineOffset: 2,
        },
      },
    },
  }

  return styles
}
