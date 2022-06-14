import { NextPage } from 'next'

import { withAuth } from 'hoc'
import { CoreLayout } from 'layouts'
import { NFTCollection } from 'components'

const CollectionPage: NextPage = () => {
  return (
    <CoreLayout maxW="container.lg" bodyStyle={{ backgroundColor: 'green.5' }}>
      <NFTCollection />
    </CoreLayout>
  )
}

export default withAuth(CollectionPage)
