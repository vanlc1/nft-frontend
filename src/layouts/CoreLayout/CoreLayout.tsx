import { Box } from '@chakra-ui/layout'
import { useRouter } from 'next/router'

import { Navigation, FooterCore } from 'components'

import { CoreLayoutProps } from './CoreLayout.types'
import useStyles from './CoreLayout.styles'

export const CoreLayout = ({
  children,
  bodyStyle,
  pageStyle,
}: CoreLayoutProps) => {
  const styles = useStyles()
  const location = useRouter()
  const pagePaddings = {
    base: '0px 10px',
    sm: '0px 10px',
    md: '0px 95px',
    lg: '0px 95px',
  }

  return (
    <Box __css={styles.container}>
      <Navigation padding={pagePaddings} location={location.pathname} />
      <Box
        padding={pagePaddings}
        __css={{ ...styles.middleContainer, ...bodyStyle }}
      >
        <Box __css={{ ...styles.componentContainer, ...pageStyle }}>
          {children}
        </Box>
      </Box>
      <FooterCore />
    </Box>
  )
}
