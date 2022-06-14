import { Box, SimpleGrid } from '@chakra-ui/layout'
import { ItemDapps } from '../ItemDapps'

export const RecentViewed = () => {
  return (
    <Box marginBottom="40px">
      <Box
        fontWeight="600"
        fontSize="16px"
        color="inkGray.60"
        marginBottom="12px"
      >
        Recent Viewed
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="24px">
        <ItemDapps />
        <ItemDapps />
        <ItemDapps />
        <ItemDapps />
      </SimpleGrid>
    </Box>
  )
}
