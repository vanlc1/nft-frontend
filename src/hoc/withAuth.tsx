import { useState, useEffect, ComponentType } from 'react'
import { Heading, Stack, Text } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'

import { useAuth } from 'hook'

const STATUS_ENUM = {
  BOOTING: 0,
  GRANTED: 1,
  DENIED: 2,
}

export function withAuth<T>(Component: ComponentType<T>) {
  const WithAuthComponent = (props: T) => {
    const { getProfile } = useAuth()
    const [status, setStatus] = useState(STATUS_ENUM.BOOTING)

    useEffect(() => {
      getProfile()
        .then(() => {
          setStatus(STATUS_ENUM.GRANTED)
        })
        .catch(() => {
          setStatus(STATUS_ENUM.DENIED)
        })
    }, [getProfile])

    if (status === STATUS_ENUM.GRANTED) {
      return <Component {...props} />
    }

    if (status === STATUS_ENUM.DENIED) {
      return (
        <Stack
          spacing="4"
          maxWidth="lg"
          align="center"
          justify="center"
          marginX="auto"
          marginY="12"
        >
          <Heading textAlign="center">Unauthorized</Heading>
          <Text textAlign="center">Login failed</Text>
        </Stack>
      )
    }

    return (
      <Stack
        width="full"
        height="600px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="whiteAlpha.700"
      >
        <Spinner
          color="#B9EEE2"
          emptyColor="#127E74"
          thickness="8px"
          size="xl"
        />
        <Text fontSize="sm">Loading</Text>
      </Stack>
    )
  }

  return WithAuthComponent
}
