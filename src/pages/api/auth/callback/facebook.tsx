import { Box } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import { CoreLayout } from 'layouts'
import { withAuth } from 'hoc'

const TestPage: NextPage = () => {
  return (
    <CoreLayout maxW="container.lg">
      <Box>Test page</Box>
    </CoreLayout>
  )
}

export default withAuth(TestPage)
