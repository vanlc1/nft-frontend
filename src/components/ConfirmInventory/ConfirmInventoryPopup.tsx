import React, { useState, useEffect } from 'react'
import { Box, Heading, Flex } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Modal, IInventoryConfirmPopup } from 'components'
import useStyles from './ConfirmInventory.style'

interface Props {
  disabled?: boolean
}

const ConfirmInventoryPopup = (props: Props) => {
  const [openModal, setOpenModal] = useState(false)
  const isDisable = props.disabled
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const styles = useStyles()
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds === 0 ? 59 : seconds - 1)
      setMinutes(seconds === 0 ? minutes - 1 : minutes)
    }, 1000)
    if (minutes === 0 && seconds === 0) {
      handleClose()
    }

    return () => clearInterval(interval)
  }, [seconds, minutes])

  const handleClose = () => {
    setOpenModal(false)
    setMinutes(3)
    setSeconds(0)
  }

  return (
    <>
      <Button
        disabled={isDisable}
        onClick={() => setOpenModal(true)}
        height="44px"
        width="100%"
      >
        Continue on mobile app
      </Button>
      {openModal && (
        <Modal
          isOpen={openModal}
          isVisibleCloseButton={true}
          width={548}
          closeOnOverlayClick={true}
          onClose={handleClose}
        >
          <Flex flexDirection="column" alignItems="center">
            <IInventoryConfirmPopup />
            <Heading
              maxW="291px"
              marginBottom="32px"
              marginTop="35px"
              textAlign="center"
              size="sm"
            >
              Please use your Mobile Wallet to confirm this transaction
            </Heading>
            <Box __css={styles.boxStyle}>
              0{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </Box>
          </Flex>
        </Modal>
      )}
    </>
  )
}

export default ConfirmInventoryPopup
