import React, { useState, useEffect } from 'react'
import { Flex, Text, Box, HStack, StackDivider } from '@chakra-ui/layout'
import { Tab, TabList, Tabs, TabPanel, TabPanels } from '@chakra-ui/tabs'
import {
  IGeneral,
  IReferences,
  IConnectApps,
  GeneralTab,
  ConnectAppsTab,
  FAQ,
  CloudPolicy,
} from 'components'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/accordion'
import useStyles from './TabSetting.styles'
const arrTab = [
  'Terms of Service',
  'Age Term for 18 Years Old',
  'Cloud Policy',
  'FAQ',
]

const TabSetting = () => {
  const [tabActive, setTabActive] = useState(0)
  const [tabChildActive, setTabChildActive] = useState(1)
  const [domLoaded, setDomLoaded] = useState(false)
  const [tabReferences, setTabReferences] = useState<number>(1)
  const styles = useStyles()

  const handleActiveTab = (index: number, type: string) => {
    setTabActive(index)
    if (type === 'general' || type === 'connect') {
      setTabChildActive(-1)
    }
  }
  const handleTabChildActive = (index: number) => {
    setTabReferences(index)
    setTabChildActive(index)
  }
  const renderTab = (number: number) => {
    if (number === 0) {
      return <Text>1</Text>
    }
    if (number === 1) {
      return <Text>2</Text>
    }
    if (number === 2) {
      return <CloudPolicy />
    }
    if (number === 3) {
      return <FAQ />
    }
  }

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <>
      <Tabs display="flex" height="100%">
        <HStack
          divider={
            <StackDivider margin="0 !important" borderColor="gray.200" />
          }
          align="stretch"
          w="100%"
        >
          <TabList borderBottom="none" flexDirection="column">
            <Tab
              height="60px"
              _selected={{ bg: 'green.10' }}
              justifyContent="flex-start"
              onClick={() => handleActiveTab(0, 'general')}
            >
              <Flex alignItems="center">
                <Box
                  marginRight="16px"
                  padding={2}
                  borderRadius="8px"
                  backgroundColor={tabActive == 0 ? 'green.50' : 'gray.30'}
                >
                  <IGeneral color={tabActive == 0 ? '#fff' : '#7E7E85'} />
                </Box>
                <Text>General</Text>
              </Flex>
            </Tab>
            <Tab
              justifyContent="flex-start"
              width="260px"
              height="60px"
              _selected={{ bg: 'green.10' }}
              onClick={() => handleActiveTab(1, 'connect')}
            >
              <Flex alignItems="center">
                <Box
                  marginRight="16px"
                  padding={2}
                  borderRadius="8px"
                  backgroundColor={tabActive == 1 ? 'green.50' : 'gray.30'}
                >
                  <IConnectApps color={tabActive == 1 ? '#fff' : '#7E7E85'} />
                </Box>
                <Text>Connected Apps</Text>
              </Flex>
            </Tab>
            <Tab
              justifyContent="flex-start"
              width="260px"
              padding="0"
              _selected={{ bg: 'green.10' }}
              onClick={() => handleActiveTab(2, 'ref')}
            >
              {domLoaded && (
                <Accordion
                  display="flex"
                  justifyContent="space-between"
                  width="100%"
                  allowToggle
                >
                  <AccordionItem border="none" width="100%">
                    <AccordionButton
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Flex alignItems="center">
                        <Box
                          __css={styles.boxStyle}
                          backgroundColor={
                            tabActive == 2 ? 'green.50' : 'gray.30'
                          }
                        >
                          <IReferences
                            color={tabActive == 2 ? '#fff' : '#7E7E85'}
                          />
                        </Box>
                        <Text>References</Text>
                      </Flex>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel
                      display="flex"
                      flexDirection="column"
                      padding="0px"
                      textAlign="left"
                      fontSize="14px"
                    >
                      {arrTab.map((item, idx) => {
                        return (
                          <Box
                            key={idx}
                            _hover={{ bg: 'gray.30' }}
                            backgroundColor={
                              tabChildActive === idx ? 'gray.30' : '#fff'
                            }
                            onClick={() => handleTabChildActive(idx)}
                            padding="20px 25px"
                          >
                            {item}
                          </Box>
                        )
                      })}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              )}
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel width="100%" padding="15px 30px">
              <GeneralTab />
            </TabPanel>
            <TabPanel padding="25px 30px">
              <ConnectAppsTab />
            </TabPanel>
            <TabPanel padding="15px 30px">{renderTab(tabReferences)}</TabPanel>
          </TabPanels>
        </HStack>
        {/* <Button>HieuBachvan</Button> */}
      </Tabs>
    </>
  )
}

export default TabSetting
