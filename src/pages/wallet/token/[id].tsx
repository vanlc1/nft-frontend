import type { NextPage } from 'next'
import { Flex } from '@chakra-ui/layout'

import { CoreLayout } from 'layouts'
import { BackButton, CardHistory, CardToken } from 'components'
import { withAuth } from 'hoc'

const TokenDetailPage: NextPage = () => {
  return (
    <CoreLayout maxW="container.lg" bodyStyle={{ backgroundColor: 'green.5' }}>
      <BackButton text="Token Detail" margin="40px 0 24px" />
      <Flex justifyContent="center" gap="24px">
        <CardToken />
        <CardHistory />
      </Flex>
    </CoreLayout>
  )
}

export default withAuth(TokenDetailPage)
