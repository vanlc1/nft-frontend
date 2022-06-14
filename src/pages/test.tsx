import type { NextPage } from 'next'
import { CoreLayout } from 'layouts'
import { withAuth } from 'hoc'

const TestPage: NextPage = () => {
  return <CoreLayout maxW="container.lg"></CoreLayout>
}

export default withAuth(TestPage)
