import { useEffect, useState, FormEventHandler } from 'react'
import { Box, Flex, Heading, Text, HStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { PinInput, PinInputField } from '@chakra-ui/pin-input'
import { useRouter } from 'next/router'

import { IError, Form, SocialNetwork } from 'components'
import { verifyOtp, resendOtp, VerifyEmailReturn } from 'services'
import { PATH_WALLET, STORAGE_TOKEN } from 'config'
import { setStorage } from 'helper'

interface VerifyOTPFormProps {
  dataVerifyEmail: VerifyEmailReturn
}

export const VerifyOTPForm = (props: VerifyOTPFormProps) => {
  const { dataVerifyEmail } = props
  const [isLoading, setLoading] = useState(false)
  const [isLoadingResend, setLoadingResend] = useState(false)
  const [time, setTime] = useState(30)
  const [isInvalidOTP, setInValidOTP] = useState(false)
  const [otp, setOtp] = useState('')

  const router = useRouter()

  const onResend = async () => {
    try {
      setLoadingResend(true)
      //call api resend with email
      await resendOtp(dataVerifyEmail.email as string)
      setTime(30)
    } catch (error) {
      //
    } finally {
      setLoadingResend(false)
    }
  }

  const onConfirm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    //call api verify otp
    try {
      setLoading(true)
      const { accessToken } = await verifyOtp(
        dataVerifyEmail.transactionId,
        otp,
        dataVerifyEmail.userId
      )
      setStorage(STORAGE_TOKEN, accessToken)

      router.push(PATH_WALLET)
    } catch (error) {
      //
      setInValidOTP(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => setTime((prev) => prev - 1), 1000)

    if (time === 0) {
      clearInterval(timer)
    }

    return () => {
      clearInterval(timer)
    }
  }, [time])
  return (
    <Flex justifyContent={{ base: 'center', md: 'flex-end' }} flexGrow={1}>
      <Box width={{ base: '100%', sm: '80%', lg: '60%' }} textAlign="center">
        <Heading
          as="h1"
          fontSize="24px"
          display={{ base: 'none', md: 'block' }}
        >
          Welcome back!
        </Heading>
        <Text
          fontSize="14px"
          marginTop="2px"
          color="grayy.50"
          display={{ base: 'none', md: 'block' }}
        >
          We are so excited to see you again!
        </Text>
        <Text fontSize="14px" margin="16px 0" color="grayy.50">
          Enter 6 digit verification code we’ve sent to your email
        </Text>

        <Form onSubmit={onConfirm}>
          <HStack
            spacing={{ base: '10px', md: '20px' }}
            justifyContent="center"
          >
            <PinInput
              placeholder="-"
              size="lg"
              value={otp}
              onChange={(value) => {
                setOtp(value)
                setInValidOTP(false)
              }}
              isInvalid={isInvalidOTP}
            >
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>

          {isInvalidOTP && (
            <Flex
              color="red.50"
              fontSize="12px"
              textAlign="left"
              marginTop="10px"
            >
              <IError />
              <Text marginLeft="7px">Invalid code. Try again</Text>
            </Flex>
          )}

          <Button
            type="submit"
            width="100%"
            marginTop="15px"
            padding="18px"
            height="40px"
            isDisabled={otp.length !== 6}
            isLoading={isLoading}
            loadingText="Confirm"
          >
            Confirm
          </Button>

          <Text fontSize="13px" color="grayy.50" marginTop="12px">
            Didn’t receive verification code?
          </Text>
          <Box fontSize="13px" color="grayy.50">
            <Button
              variant="link"
              fontSize="13px"
              color="grayy.50"
              marginRight="3px"
              textDecoration="underline"
              onClick={onResend}
              disabled={time > 0 ? true : false}
              isLoading={isLoadingResend}
              loadingText="Resend"
            >
              Resend
            </Button>
            {time !== 0 && `in 00:${time < 10 ? `0${time}` : time}`}
          </Box>
        </Form>

        <SocialNetwork marginTop="20px" />
      </Box>
    </Flex>
  )
}
