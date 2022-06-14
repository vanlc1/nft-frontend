import { Box, Flex, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import Link from 'next/link'
import type { NextPage } from 'next'
import { BaseLayout } from 'layouts'
import { PATH_LOGIN, PATH_CREATE_ACCOUNT } from 'config'

const HomePage: NextPage = () => {
  return (
    <BaseLayout maxW="container.lg" hasTextDownload={true}>
      <Box display={{ base: 'flex', md: 'none' }} justifyContent="center">
        <Image
          src="/assets/images/imgLandingPage.svg"
          alt="cover"
          width="200px"
        />
      </Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginTop={{ base: '10px', md: '105px' }}
      >
        <Box flexGrow={1} width="49%">
          <Text
            color="grayy.50"
            fontWeight="600"
            fontSize="16px"
            marginBottom="12px"
            textAlign={{ base: 'center', md: 'left' }}
          >
            Welcome to NFT Wallet!
          </Text>
          <Text
            fontSize="40px"
            fontWeight="800"
            color="gray.60"
            lineHeight="48px"
            textAlign={{ base: 'center', md: 'left' }}
          >
            GET MORE FROM <br /> YOUR STAKING
          </Text>

          <Text
            color="grayy.50"
            fontSize="14px"
            marginTop="24px"
            fontWeight="400"
            lineHeight="22px"
            maxWidth={{ sm: '100%', md: '440px' }}
          >
            More than the best and safest place to store your assets, NFT Wallet
            also offers a transparent, secure, and guaranteed financial trading
            experience with an attractive staking leverage system.
          </Text>
          <Text
            color="grayy.50"
            fontSize="14px"
            margin="18px 0 30px"
            fontWeight="400"
            lineHeight="22px"
            maxWidth={{ sm: '100%', md: '440px' }}
          >
            Create an account or Login now to discover how NFT Wallet grows your
            assets.
          </Text>

          <Flex justifyContent={{ base: 'center', md: 'initial' }}>
            <Link href={PATH_CREATE_ACCOUNT}>
              <Button
                variant="solid"
                height="44px"
                marginRight="24px"
                paddingX="20px"
                fontWeight="500"
                width={{ base: '100%', md: 'initial' }}
              >
                Create Account
              </Button>
            </Link>

            <Link href={PATH_LOGIN}>
              <Button
                height="44px"
                bg="#FFB32B"
                color="gray.60"
                paddingX="20px"
                _hover={{ bg: '#eba01a' }}
                fontWeight="500"
                width={{ base: '100%', md: 'initial' }}
              >
                Login Account
              </Button>
            </Link>
          </Flex>
        </Box>

        <Box
          flexGrow={1}
          display={{ base: 'none', md: 'flex' }}
          justifyContent="flex-end"
        >
          <Image src="/assets/images/imgLandingPage.svg" alt="cover" />
        </Box>
      </Flex>
    </BaseLayout>
  )
}

export default HomePage
