import { useEffect, useState, useCallback } from 'react'

import { Box } from '@chakra-ui/layout'
import {
  FileRejection,
  useDropzone,
  Accept as AcceptType,
} from 'react-dropzone'

import { IAddImage } from 'components/Icons'

import { FileUploaderProps, UploadableFile } from './FileUploader.types'
import useStyles from './FileUploader.styles'
import { FileItem } from './FileItem'

let currentId = 0
const UPLOAD_ACCEPT_TYPE: AcceptType = {
  'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
  'video/*': ['.mp4'],
}
const MAX_UPLOAD_SIZE = 300 * 1024

function getNewId() {
  return ++currentId
}

export const FileUploader = ({ onChange }: FileUploaderProps) => {
  const styles = useStyles()
  const [files, setFiles] = useState<UploadableFile[]>([])

  useEffect(() => {
    onChange(files)
  }, [files, onChange])

  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({
      file,
      errors: [],
      id: getNewId(),
    }))
    const mappedRej = rejFiles.map((r) => ({ ...r, id: getNewId() }))
    setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej])
  }, [])

  const onDelete = (file: File) => {
    setFiles((curr) => curr.filter((fw) => fw.file !== file))
    onChange(files)
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: UPLOAD_ACCEPT_TYPE,
    maxSize: MAX_UPLOAD_SIZE,
  })

  return (
    <>
      <Box __css={styles.fileUploadContainer} {...getRootProps()}>
        <Box>
          {files.length > 0 ? (
            <Box __css={styles.fileItems}>
              {files.map(
                (fileItem) =>
                  !fileItem.errors.length && (
                    <Box key={fileItem.id}>
                      <FileItem onDelete={onDelete} file={fileItem.file} />
                    </Box>
                  )
              )}
            </Box>
          ) : (
            <Box __css={styles.fileCard}>
              <Box __css={styles.fileInput}>
                <input type="file" {...getInputProps()} />
                <button>
                  <IAddImage />
                </button>
              </Box>
              <Box __css={styles.fileAcceptType}>
                <p>
                  Drag and drop or <u>browse</u> your files
                </p>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  )
}
