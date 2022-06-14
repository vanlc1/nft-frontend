import { FileError } from 'react-dropzone'

export interface FileUploaderProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (files: UploadableFile[]) => void
}

export interface UploadableFile {
  id: number
  file: File
  errors: FileError[]
  url?: string
}
