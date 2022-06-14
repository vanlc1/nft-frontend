import { Flex, Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
export const ItemDapps = () => {
  return (
    <Flex
      alignItems="center"
      background="white"
      width="400px"
      height="84px"
      padding="12px 16px"
      borderRadius="20px"
    >
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr2VAGoByNaCfmKKmSs3O7bGCIMtlIv2LIUVEb6Yt2iqsmX_a1UM9GsDkkddqeXfwegco&usqp=CAU"
        alt="image"
        boxSize="60px"
        borderRadius="20px"
      />
      <Box marginLeft="8px">
        <Box fontSize="18px" fontWeight="600">
          OpenSea
        </Box>
        <Box fontSize="12px" fontWeight="400">
          World Largest NFT Market
        </Box>
      </Box>
    </Flex>
  )
}
