import { Heading, Text, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

export const QRCode = () => {
  return (
    <Flex justifyContent={{ base: 'center', md: 'flex-start' }} flexGrow={1}>
      <Flex alignItems="center" flexDirection="column">
        <Image src="/assets/images/qrcode.svg" objectFit="cover" alt="qrcode" />

        <Heading fontSize="24px" marginTop="40px">
          Login with QR Code
        </Heading>
        <Text color="gray" fontSize="14px" textAlign="center" marginTop="12px">
          Open Wallet App and scan this QR <br /> code to login instantly
        </Text>
      </Flex>
    </Flex>
  )
}
