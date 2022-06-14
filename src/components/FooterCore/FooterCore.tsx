import { Fragment } from 'react'
import { Flex } from '@chakra-ui/layout'

import { FooterCoreProps } from './FooterCore.types'

export const FooterCore = (props: FooterCoreProps) => {
  const { height } = props
  return (
    <Fragment>
      <Flex
        backgroundColor="inkGray.60"
        color="skyGray.10"
        fontSize="13px"
        height={height ? height : '85px'}
        justifyContent="center"
        alignItems="center"
      >
        © 2022 wallet.nft.vng.com. All rights reserved
      </Flex>
    </Fragment>
  )
}
