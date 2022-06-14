import { Box } from '@chakra-ui/layout'
import { FrequentlyVisited } from './FrequentlyVisited'
import { Game } from './Games'
import { RecentViewed } from './RecentViewed'
export const Discover = () => {
  return (
    <Box>
      <Box
        fontWeight="700"
        fontSize="24px"
        color="inkGray.60"
        margin="42px 0 26px"
      >
        Discover DApps
      </Box>
      <Game />
      <RecentViewed />
      <FrequentlyVisited />
    </Box>
  )
}
