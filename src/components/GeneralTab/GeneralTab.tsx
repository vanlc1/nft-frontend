import React, { useState } from 'react'
import { VStack, StackDivider, Flex, Text, Box } from '@chakra-ui/layout'
import { Switch } from '@chakra-ui/switch'
import { CustomerSelect } from 'components'
import useStyles from './GeneralTab.styles'

const languages = [
  { value: 'English', label: 'English' },
  { value: 'Vietnamese', label: 'Vietnamese' },
  { value: 'Chinese', label: 'Chinese' },
  { value: 'Japanese', label: 'Japanese' },
  { value: 'Thailand', label: 'Thailand' },
]
const currentcies = [
  { value: 'USD - United States Dollar', label: 'USD' },
  { value: 'VND - Viet Nam Dong', label: 'VND' },
  { value: 'EUR - Euro', label: 'EUR' },
]

export const GeneralTab = () => {
  const [language, setLanguage] = useState('English')
  const [currentcy, setCurrentcy] = useState('USD - United States Dollar')
  const styles = useStyles()
  return (
    <>
      <VStack divider={<StackDivider />} spacing={4} align="stretch">
        <Flex __css={styles.flexStyle}>
          <Flex __css={styles.flex1ChildStyle}>
            <Text __css={styles.textStyle} fontSize="16px" fontWeight="600">
              Language
            </Text>
            <Text fontSize="14px">{language}</Text>
          </Flex>
          <CustomerSelect setLanguage={setLanguage} options={languages} />
        </Flex>
        <Flex __css={styles.flexStyle}>
          <Flex __css={styles.flex1ChildStyle}>
            <Text __css={styles.textStyle} fontSize="16px" fontWeight="600">
              Currentcy
            </Text>
            <Text fontSize="14px">{currentcy.split('-')[0]}</Text>
          </Flex>
          <CustomerSelect setLanguage={setCurrentcy} options={currentcies} />
        </Flex>
        <Flex __css={styles.flexStyle}>
          <Flex __css={styles.flex3ChildStyle}>
            <Box>
              <Text __css={styles.textStyle} fontSize="16px" fontWeight="600">
                Balances
              </Text>
              <Text fontSize="14px">Show 0 Balances</Text>
            </Box>

            <Switch colorScheme="teal" size="md" />
          </Flex>
        </Flex>
      </VStack>
    </>
  )
}

// export default GeneralTab
