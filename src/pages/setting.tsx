import React from 'react'
import { Box, Heading, StackDivider, VStack } from '@chakra-ui/layout'
import TabSetting from 'components/TabSetting/TabSetting'
import Styles from '../components/SettingPage/SettingPage.styles'
const setting = () => {
  const styles = Styles()
  return (
    <Box __css={styles.wrapBox}>
      <Box __css={styles.BoxChild}>
        <VStack
          divider={<StackDivider margin="0 !important" />}
          align="stretch"
          height="100%"
        >
          <Box padding={4}>
            <Heading size="md">Setting</Heading>
          </Box>

          <TabSetting />
        </VStack>
      </Box>
    </Box>
  )
}

export default setting
