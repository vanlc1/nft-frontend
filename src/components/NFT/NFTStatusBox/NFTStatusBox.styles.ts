import { CSSObject } from '@chakra-ui/styled-system'

const styleStatusTextCommon = {
  fontSize: '10px',
  fontWeight: '500',
}
const styleStatusContainerCommon = {
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  justifyContents: 'space-evenly',
  width: 'fit-content',
  height: '20px',
  padding: '2px 6px 2px 6px',
  borderRadius: '100px',
}

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    statusContainerAvailable: {
      ...styleStatusContainerCommon,
      backgroundColor: 'green.10',
    },
    statusContainerUnavailable: {
      ...styleStatusContainerCommon,
      backgroundColor: 'red.10',
    },
    statusLockIcon: {
      width: '10px',
      height: '10px',
      margin: '0px 4px 0px 0px',
    },
    statusTxtAvailable: {
      ...styleStatusTextCommon,
      color: 'green.50',
    },
    statusTxtUnavailable: {
      ...styleStatusTextCommon,
      color: 'red.50',
    },
  }

  return styles
}
