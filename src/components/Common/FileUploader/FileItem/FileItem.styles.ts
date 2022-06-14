import { CSSObject } from '@chakra-ui/styled-system'

export default function useStyles() {
  const styles: Record<string, CSSObject> = {
    fileItemContainer: {},
    fileContent: {},
    image: {
      width: '65px',
      height: '65px',
      opacity: '0.5',
      borderRadius: '6px',
    },
    fileInfo: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '76px',
      fontSize: '12px',
    },
    removeFileIcon: {
      backgroundColor: 'white',
      width: '15px',
      height: '15px',
      display: 'flex',
      svg: {
        width: '5px',
        height: '5px',
        margin: 'auto',
        display: 'block',
        color: 'grayy.40',
      },
      transform: 'translate(46px, -63px)',
    },
  }
  return styles
}
