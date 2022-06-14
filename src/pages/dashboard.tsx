import { Flex, Box, Text } from '@chakra-ui/layout'

import { useSession, signOut } from 'next-auth/react'
import { Button } from '@chakra-ui/react'

import type { NextPage } from 'next'
import { CoreLayout } from 'layouts'
import { withAuth } from 'hoc'

const DashboardPage: NextPage = () => {
  const { data: session } = useSession()

  if (session) {
    console.log(session)
  }

  return (
    <CoreLayout maxW="container.lg">
      <Flex justifyContent="center" width="100%">
        Logged
      </Flex>

      <Box>
        {session && (
          <Box>
            <Text>Signed in as {session?.user?.email} </Text>

            <Button height="40px" onClick={() => signOut()}>
              Sign out
            </Button>
          </Box>
        )}
      </Box>
    </CoreLayout>
  )
}

export default withAuth(DashboardPage)
