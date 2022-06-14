import { Box, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { BaseLayout } from 'layouts'
import { IGooglePlay } from 'components/Icons/IGooglePlay'
import { IAppleStore } from 'components/Icons/IAppleStore'

const CreatePage: NextPage = () => {
  return (
    <BaseLayout maxW="container.lg" hasTextDownload={true}>
      <Box
        display={{ base: 'flex', md: 'none' }}
        marginTop="30px"
        justifyContent="center"
      >
        <Image
          src="/assets/images/iphone.svg"
          alt="cover"
          width={{ base: '100px', md: '200px' }}
        />
      </Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        marginTop={{ base: '10px', md: '105px' }}
      >
        <Box
          flexGrow={1}
          display={{ base: 'none', md: 'flex' }}
          justifyContent="flex-end"
          marginRight="50px"
        >
          <Image src="/assets/images/iphone.svg" alt="cover" />
        </Box>
        <Box flexGrow={1} width="40%">
          <Text
            color="grayy.50"
            fontWeight="600"
            fontSize="16px"
            marginBottom="12px"
            textAlign={{ base: 'center', md: 'left' }}
          >
            Staking world in your pocket!
          </Text>
          <Text
            fontSize="40px"
            fontWeight="800"
            color="gray.60"
            lineHeight="48px"
            textAlign={{ base: 'center', md: 'left' }}
          >
            GET YOUR OWN <br /> MOBILE APP
          </Text>

          <Text
            color="grayy.50"
            fontSize="14px"
            margin="24px 0 30px"
            lineHeight="22px"
            textAlign={{ base: 'center', md: 'left' }}
            width={{ base: '100%', md: '291px' }}
            paddingX={{ base: '90px', md: '0' }}
          >
            Download the NFT Wallet App to create a new account and enjoy
            interesting experiments with us!
          </Text>

          <Flex justifyContent={{ base: 'center', md: 'initial' }}>
            <Box cursor="pointer" mr="20px">
              <IGooglePlay />
            </Box>

            <Box cursor="pointer">
              <IAppleStore />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </BaseLayout>
  )
}

export default CreatePage
