import { useState } from 'react'
import type { NextPage } from 'next'
import { HStack, StackDivider, Box, Text, Heading } from '@chakra-ui/layout'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/tabs'

import { BaseLayout } from 'layouts'
import { VerifyEmailForm, QRCode, VerifyOTPForm } from 'components'
import { VerifyEmailReturn } from 'services'

const LoginPage: NextPage = () => {
  const [dataVerifyEmail, setDataVerifyEmail] =
    useState<VerifyEmailReturn | null>(null)

  const onSuccessVerifyEmail = (data: VerifyEmailReturn) => {
    setDataVerifyEmail(data)
  }

  return (
    <BaseLayout>
      <HStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={10}
        marginTop="100px"
        display={{ base: 'none', md: 'flex' }}
      >
        {dataVerifyEmail ? (
          <VerifyOTPForm dataVerifyEmail={dataVerifyEmail} />
        ) : (
          <VerifyEmailForm onSuccess={onSuccessVerifyEmail} />
        )}

        <QRCode />
      </HStack>

      <Box display={{ base: 'block', md: 'none' }}>
        <Box textAlign="center" margin="24px 0">
          <Heading color="gray.60" fontSize="24px" marginBottom="4px">
            Welcome back!
          </Heading>
          <Text color="grayy.50" fontSize="sm">
            We are so excited to see you again!
          </Text>
        </Box>

        {dataVerifyEmail ? (
          <Box borderRadius="20px" bg="#FFFFFF" padding="10px 15px 40px">
            <Box textAlign="center">
              <VerifyOTPForm dataVerifyEmail={dataVerifyEmail} />
            </Box>
          </Box>
        ) : (
          <Tabs
            isFitted
            borderRadius="20px"
            bg="white"
            padding="11px 16px 40px"
          >
            <TabList>
              <Tab
                fontWeight="600"
                color="inkGray.30"
                _selected={{
                  borderColor: 'gray.60',
                  color: 'gray.60',
                }}
              >
                QR Code
              </Tab>
              <Tab
                fontWeight="600"
                color="inkGray.30"
                _selected={{
                  borderColor: 'gray.60',
                  color: 'gray.60',
                }}
              >
                Email - Social
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel padding="0">
                <Box marginTop="24px">
                  <QRCode />
                </Box>
              </TabPanel>
              <TabPanel padding="0">
                <Box textAlign="center" marginTop="24px">
                  <VerifyEmailForm onSuccess={onSuccessVerifyEmail} />
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        )}
      </Box>
    </BaseLayout>
  )
}

export default LoginPage
