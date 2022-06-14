import { useEffect, useState } from 'react'
import { Box, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { ICopy, ToastMessage } from 'components'

import { useUser } from 'hook'
import useStyles from './ReceiveQRCode.styles'

export const ReceiveQRCode = () => {
  const styles = useStyles()
  const [displayToast, setDisplayToast] = useState(0)

  const { receiveQRCodeData, getQRCodeReceiveToken } = useUser()
  const { qrTokenSrc, userPicSrc, userName, walletAddress } =
    receiveQRCodeData! || {}

  const copyToClipboard = async (value: string) => {
    navigator.clipboard.writeText(value)
    setDisplayToast(displayToast + 1)
  }

  useEffect(() => {
    getQRCodeReceiveToken()
  }, [getQRCodeReceiveToken])

  return (
    <Box __css={styles.container}>
      <ToastMessage
        title="Copied!"
        isClosable={true}
        position="top"
        duration={1500}
        status="success"
        displayToast={displayToast}
        setDisplayToast={() => setDisplayToast}
      />
      <Box __css={styles.content}>
        <Box __css={styles.header}>
          <Text sx={styles.title}>Receive</Text>
        </Box>
        <Box __css={styles.body}>
          <Image src={qrTokenSrc} alt="qrcode" sx={styles.qrcode} />
          <Text sx={styles.note}>
            Please show the sender this qr code <br /> or copy address below
          </Text>
          <Image src={userPicSrc} alt="userPic" __css={styles.userPic} />
          <Box display="flex" alignItems="center" mt="7px">
            <Text sx={styles.username}>{userName}</Text>
            <Box onClick={() => copyToClipboard(userName)} cursor="pointer">
              <ICopy />
            </Box>
          </Box>
          <Box __css={styles.tokenContainer}>
            <Text sx={styles.token}>{walletAddress}</Text>
            <Box
              onClick={() => copyToClipboard(walletAddress)}
              cursor="pointer"
            >
              <ICopy />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
