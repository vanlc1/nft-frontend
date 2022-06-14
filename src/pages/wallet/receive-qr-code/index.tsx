import type { NextPage } from 'next'
import { Box } from '@chakra-ui/layout'

import { BackButton, ReceiveQRCode } from 'components'
import { CoreLayout } from 'layouts'
import { withAuth } from 'hoc'

const ReceiveTokenPage: NextPage = () => {
  return (
    <div>
      <CoreLayout>
        <Box marginTop="40px">
          <BackButton text="Back" />
        </Box>
        <ReceiveQRCode />
      </CoreLayout>
    </div>
  )
}

export default withAuth(ReceiveTokenPage)
