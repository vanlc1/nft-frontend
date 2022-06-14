import type { NextPage } from 'next'
import { Text, Flex } from '@chakra-ui/layout'

import { CoreLayout } from 'layouts'
import { CardUser, CardWallet } from 'components'
import { withAuth } from 'hoc'

const WalletPage: NextPage = () => {
  return (
    <CoreLayout maxW="container.lg" bodyStyle={{ backgroundColor: 'green.5' }}>
      <Text
        textAlign="center"
        margin="40px 0 24px"
        fontSize="18px"
        fontWeight="600"
      >
        Hi Brian, Welcome to your wallet
      </Text>

      <Flex justifyContent="center" gap="24px">
        <CardUser />
        <CardWallet />
      </Flex>
    </CoreLayout>
  )
}

export default withAuth(WalletPage)
