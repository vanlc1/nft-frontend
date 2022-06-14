import { useEffect, useRef, MutableRefObject, MouseEvent } from 'react'

import { Box } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { CloseIcon } from '@chakra-ui/icons'

import { FileItemProps } from './FileItem.types'
import useStyles from './FileItem.styles'

export function FileItem({ file, onDelete }: FileItemProps) {
  const styles = useStyles()
  const imgRef = useRef() as MutableRefObject<HTMLImageElement>

  useEffect(() => {
    if (file) {
      imgRef.current.src = URL.createObjectURL(file)
    } else {
      imgRef.current.src = ''
    }
  }, [file])

  const handleRemoveFile = (evt: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.stopPropagation()
    onDelete(file)
  }

  return (
    <Box __css={styles.fileItemContainer}>
      <Box __css={styles.fileContent}>
        <Image __css={styles.image} ref={imgRef} alt="image" />
        <IconButton
          isRound
          aria-label="remove"
          icon={<CloseIcon />}
          onClick={(evt: any) => handleRemoveFile(evt)}
          __css={styles.removeFileIcon}
        >
          Delete
        </IconButton>
      </Box>
      <Box __css={styles.fileInfo}>{file.name}</Box>
      <Box __css={styles.fileInfo}>{file.size}</Box>
    </Box>
  )
}
