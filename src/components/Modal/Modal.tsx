import { Fragment } from 'react'
import { Box } from '@chakra-ui/layout'
import {
  Modal as BaseModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/modal'

import useStyles from './Modal.styles'
import { BaseModalProps } from './Modal.types'

export const Modal = ({ children, ...props }: BaseModalProps) => {
  const {
    title,
    isVisibleCloseButton,
    width,
    contentCSS,
    headerCSS,
    bodyCSS,
    ...rest
  } = props
  const styles = useStyles()
  return (
    <Fragment>
      <Box __css={styles.modalContainer}>
        <BaseModal {...rest}>
          <ModalOverlay />
          <ModalContent width={width} overflow="hidden" sx={contentCSS}>
            <ModalHeader sx={headerCSS}>{title}</ModalHeader>
            {isVisibleCloseButton && <ModalCloseButton />}
            <ModalBody sx={bodyCSS}>{children}</ModalBody>
          </ModalContent>
        </BaseModal>
      </Box>
    </Fragment>
  )
}

Modal.defaultProps = {
  isVisibleCloseButton: true,
  width: 311,
  closeOnOverlayClick: false,
}
