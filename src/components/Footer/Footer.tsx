import { Fragment } from 'react'
import { Box } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

import { FooterCore } from 'components'

import { FooterProps } from './Footer.types'

export const Footer = (props: FooterProps) => {
  const { hasTextDownload } = props
  return (
    <Fragment>
      <Box
        backgroundImage={{ base: 'none', md: '/assets/images/footerImage.svg' }}
        backgroundPosition="left"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height={{ base: '50px', md: '200px' }}
        display="flex"
        justifyContent="end"
        flexDirection="column"
        alignItems="center"
        marginTop={{ base: '15px', md: '0' }}
      >
        {!hasTextDownload && (
          <Box marginBottom="20px" fontSize="14px" color="grayy.50">
            New to Wallet?
            <Button
              variant="link"
              textDecoration="underline"
              fontWeight="600"
              color="green.70"
              marginLeft="5px"
            >
              Download App now!
            </Button>
          </Box>
        )}
      </Box>

      <FooterCore />
    </Fragment>
  )
}
