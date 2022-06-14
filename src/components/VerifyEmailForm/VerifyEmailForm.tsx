import { useState } from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { InputGroup, InputRightElement, Input } from '@chakra-ui/input'

import { verifyEmail } from 'services'
import { IError, SocialNetwork, Form } from 'components'

import { LoginFormProps, VerifyEmailFormData } from './VerifyEmailForm.types'

const schema = yup
  .object({
    email: yup
      .string()
      .email('Invalid Email! Please enter another email.')
      .required('This field should not be left blank.'),
  })
  .required()

export const VerifyEmailForm = (props: LoginFormProps) => {
  const { onSuccess } = props
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  })

  const [isEmailBlur, setEmailBlur] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const onSubmit = async (data: VerifyEmailFormData) => {
    // handle data call api
    try {
      setLoading(true)
      const res = await verifyEmail(data.email)
      onSuccess?.(res)
    } catch (error: any) {
      setError('email', {
        type: 'custom',
        message: error?.response?.data?.message,
      })
    } finally {
      setLoading(false)
      setValue('email', '')
    }
  }

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
        <Text fontSize="14px" margin="14px 0" color="grayy.50">
          Login via Email to receive a verification code
        </Text>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <Input
              {...register('email')}
              placeholder="Input Email"
              fontSize="sm"
              onFocus={() => setEmailBlur(false)}
              onBlur={() => setEmailBlur(true)}
            />
            {errors.email && isEmailBlur && (
              <InputRightElement>
                <IError />
              </InputRightElement>
            )}
          </InputGroup>
          <Text textAlign="left" color="red.50" fontSize="12px" marginTop="8px">
            {errors.email && isEmailBlur && errors.email?.message}
          </Text>

          <Button
            width="100%"
            marginTop="20px"
            padding="18px"
            height="40px"
            type="submit"
            isDisabled={!isValid}
            isLoading={isLoading}
            loadingText="Login"
          >
            Login
          </Button>
        </Form>

        <SocialNetwork />
      </Box>
    </Flex>
  )
}
