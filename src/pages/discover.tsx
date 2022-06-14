import type { NextPage } from 'next'
import { CoreLayout } from 'layouts'
import { Discover } from 'components'

const DiscoverPage: NextPage = () => {
  return (
    <CoreLayout maxW="container.lg" pageStyle={{ padding: '0 250px' }}>
      <Discover />
    </CoreLayout>
  )
}

export default DiscoverPage
