import { Box, Flex, Container } from '@chakra-ui/layout'

import { Footer, Header } from 'components'

import { BaseLayoutProps } from './BaseLayout.types'

export const BaseLayout = (props: BaseLayoutProps) => {
  const { children, maxW, hasTextDownload } = props
  return (
    <Flex flexDirection="column" minHeight="100vh" bg="#FAFAFB">
      <Header />

      <Box flexGrow={1}>
        <Container maxW={maxW ? maxW : 'container.xl'}>{children}</Container>
      </Box>

      <Footer hasTextDownload={hasTextDownload} />
    </Flex>
  )
}
