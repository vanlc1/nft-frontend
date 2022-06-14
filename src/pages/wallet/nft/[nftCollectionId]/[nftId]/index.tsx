import type { NextPage } from 'next'

import { withAuth } from 'hoc'
import { CoreLayout } from 'layouts'
import { NFTDetail } from 'components'

const NftDetailPage: NextPage = () => {
  return (
    <CoreLayout maxW="container.lg" bodyStyle={{ backgroundColor: 'green.5' }}>
      <NFTDetail />
    </CoreLayout>
  )
}

export default withAuth(NftDetailPage)
