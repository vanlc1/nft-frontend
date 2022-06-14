import { CSSObject, ModalProps } from '@chakra-ui/react'

import { HTMLAttributes, PropsWithChildren } from 'react'

export interface BaseModalProps
  extends PropsWithChildren<HTMLAttributes<ModalProps>> {
  isOpen: boolean
  width?: number
  title?: string
  cancelButtonTitle?: string
  isVisibleCloseButton?: boolean
  onClose: () => void
  contentCSS?: CSSObject
  headerCSS?: CSSObject
  bodyCSS?: CSSObject
}
