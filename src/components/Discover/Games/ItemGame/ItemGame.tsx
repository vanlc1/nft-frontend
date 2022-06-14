import { Box } from '@chakra-ui/layout'

export const ItemGame = () => {
  return (
    <Box
      width="188px"
      height="188px"
      backgroundImage="https://genk.mediacdn.vn/139269124445442048/2021/10/20/photo-1-16346969443311486290274.jpg"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      position="relative"
      borderRadius="20px"
    >
      <Box position="absolute" bottom="0" left="12px">
        <Box color="white" fontWeight="600" fontSize="18px">
          Axie
        </Box>
        <Box color="white" fontSize="12px" fontWeight="400" marginBottom="10px">
          Battle - Collect - Earn
        </Box>
      </Box>
    </Box>
  )
}
