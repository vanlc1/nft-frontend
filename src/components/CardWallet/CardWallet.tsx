import { Box } from '@chakra-ui/layout'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/tabs'
import { ListToken } from './ListToken'
import { ListNFT } from './ListNFT'

export const CardWallet = () => {
  return (
    <Box
      width="400px"
      height="470px"
      background="white"
      boxShadow="0px 4px 30px rgba(0, 0, 0, 0.03)"
      borderRadius="20px"
    >
      <Tabs isFitted borderRadius="20px" bg="white" padding="11px 0px 40px">
        <TabList>
          <Tab
            fontWeight="600"
            color="inkGray.30"
            _selected={{
              borderColor: 'gray.60',
              color: 'gray.60',
            }}
          >
            Tokens
          </Tab>
          <Tab
            fontWeight="600"
            color="inkGray.30"
            _selected={{
              borderColor: 'gray.60',
              color: 'gray.60',
            }}
          >
            NFTs
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel maxHeight="380px" overflow="auto">
            <ListToken />
          </TabPanel>
          <TabPanel maxHeight="380px" overflow="auto">
            <ListNFT />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
