import React, { useState } from 'react'
import { Box, Text, VStack, StackDivider, Flex } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { IUnlink, IWarning, Modal } from 'components'

import useStyles from './ConnectAppsTab.styles'
const imageList = [
  'https://opensea.io/static/images/logos/opensea.svg',
  'https://opensea.io/static/images/logos/opensea.svg',
  'https://opensea.io/static/images/logos/opensea.svg',
]
export const ConnectAppsTab = () => {
  const styles = useStyles()
  const [isOpenModal, setOpenModal] = useState(false)
  const handleClose = () => {
    setOpenModal(false)
  }
  return (
    <>
      <Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontWeight="600">All Apps(3)</Text>
          <Button onClick={() => setOpenModal(true)} __css={styles.buttonStyle}>
            Disconnect All
          </Button>
        </Flex>
        <VStack
          divider={<StackDivider />}
          spacing={4}
          align="stretch"
          __css={styles.vStackStyle}
        >
          {imageList.map((url, index) => {
            return (
              <Flex key={index} __css={styles.flexStyle}>
                <Flex alignItems="center">
                  <Image __css={styles.imageStyle} src={url} alt="image" />
                  <Text __css={styles.textStyle}>Open See</Text>
                </Flex>
                <IUnlink />
              </Flex>
            )
          })}
        </VStack>
        {isOpenModal && (
          <Modal
            isOpen={isOpenModal}
            isVisibleCloseButton={true}
            width={311}
            closeOnOverlayClick={true}
            onClose={handleClose}
          >
            <Box __css={styles.boxWrapperPopup}>
              <IWarning />
              <Box __css={styles.headingPopupStyle}>
                Are you sure you want to disconnect all from this site?
              </Box>
              <Box __css={styles.box2Style}>
                You may lose sites functionality
              </Box>
              <Button __css={styles.buttonPopup1Style}>Disconnect all</Button>
              <Button variant="secondary" onClick={() => setOpenModal(false)}>
                Cancel
              </Button>
            </Box>
          </Modal>
        )}
      </Box>
    </>
  )
}
