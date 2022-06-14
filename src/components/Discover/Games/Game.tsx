import { Box, SimpleGrid } from '@chakra-ui/layout'
import { ItemGame } from './ItemGame'

export const Game = () => {
  return (
    <Box marginBottom="40px">
      <Box
        fontWeight="600"
        fontSize="16px"
        color="inkGray.60"
        marginBottom="12px"
      >
        Games
      </Box>

      <SimpleGrid columns={{ base: 1, md: 4 }} spacing="24px">
        <ItemGame />
        <ItemGame />
        <ItemGame />
        <ItemGame />
      </SimpleGrid>
    </Box>
  )
}
