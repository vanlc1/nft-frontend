import { Text } from '@chakra-ui/layout'

import type { NextPage } from 'next'
import { BaseLayout } from 'layouts'

const QRPage: NextPage = () => {
  return (
    <BaseLayout maxW="container.lg" hasTextDownload={true}>
      <Text>QR page</Text>
    </BaseLayout>
  )
}

export default QRPage
