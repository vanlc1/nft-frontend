import { Box, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

import { INFTContractsDTO } from 'types'
import { useRouter } from 'next/router'
import { PATH_WALLET } from 'config'

export const ItemNFT = ({ nftData }: { nftData: INFTContractsDTO }) => {
  const router = useRouter()
  return (
    <Box marginBottom="15px">
      <Text
        color="inkGray.60"
        fontSize="14px"
        fontWeight="500"
        marginBottom="5px"
      >
        {nftData.nameNFTContracts} ({nftData.amount})
      </Text>
      <Image
        src={nftData.srcImage}
        objectFit="cover"
        width="100%"
        height="100px"
        alt="icon"
        borderRadius="20px"
        cursor="pointer"
        onClick={() =>
          router.push(`${PATH_WALLET}/nft/${nftData.contractAddress}`)
        }
      />
    </Box>
  )
}
