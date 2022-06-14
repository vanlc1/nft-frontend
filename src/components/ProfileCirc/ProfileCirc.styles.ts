import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    borderProfile: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid',
      borderColor: 'green.30',
      borderRadius: '3xl',
    },
    profileImg: {
      width: '93%',
      height: '93%',
      objectFit: 'contain',
      borderRadius: 'full',
    },
  }

  return styles
}
