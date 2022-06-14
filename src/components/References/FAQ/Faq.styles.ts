import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    faqContainer: {},
    accordionTitle: {
      flex: 1,
      fontSize: 14,
      fontWeight: '500',
      color: 'gray.60',
      textAlign: 'left',
      flexBasis: '100%',
    },
    accordionContent: {
      paddingLeft: '0px',
      color: 'grayy.40',
    },
    accordionButton: {
      padding: '16px',
      marginTop: 10,
      paddingLeft: '0px',
    },
    accordionIcon: {
      color: 'grayy.40',
    },
    faqContent: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    faqFooter: {
      marginTop: '50px',
      alignItems: 'end',
      justifyContent: 'flex-start',
      gap: '0 4px',
      display: 'flex',
    },
    faqContactLink: {
      color: 'red',
      textDecoration: 'underline',
    },
    contactModalContainer: {
      display: 'flex',
      flexFlow: 'column wrap',
      gap: '14px 0',
    },
    ContactInput: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    contactUpload: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    sendButton: {
      minHeight: '44px',
      backgroundColor: 'green.50',
      borderRadius: '10px',
      color: 'white',
      fontSize: '14px',
      fontWeight: '500',
      marginTop: '25px',
      marginBottom: '18px',
      width: '100%',
    },
  }

  return styles
}
