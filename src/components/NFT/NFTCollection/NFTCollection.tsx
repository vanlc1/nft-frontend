import { useEffect, useState } from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import Link from 'next/link'

import {
  BackButton,
  InterfaceValueLabel,
  NFTCollectionCard,
  SelectMultiple,
} from 'components'
import { useWallet } from 'hook'
import {
  NFT_STATE_IN_WALLET,
  NFT_STATE_ON_DAPP,
  NFT_STATE_ON_MARKET,
  NFT_TYPE1,
  NFT_TYPE2,
  NFT_TYPE3,
  PATH_WALLET,
} from 'config'
import { INftDTO } from 'types'
import { getTextNFTState, getTextNFTType } from 'helper'

import useStyles from './NFTCollection.styles'
import { NFTCollectionProps } from './NFTCollection.types'

export const NFTCollection = (props: NFTCollectionProps) => {
  // Declarations
  const { ...rest } = props
  const styles = useStyles()
  const stateOptions: InterfaceValueLabel[] = [
    { value: 'all', label: 'All' },
    { value: NFT_STATE_IN_WALLET, label: getTextNFTState(NFT_STATE_IN_WALLET) },
    { value: NFT_STATE_ON_MARKET, label: getTextNFTState(NFT_STATE_ON_MARKET) },
    { value: NFT_STATE_ON_DAPP, label: getTextNFTState(NFT_STATE_ON_DAPP) },
  ]
  const typeOptions: InterfaceValueLabel[] = [
    { value: 'all', label: 'All' },
    { value: NFT_TYPE1, label: getTextNFTType(NFT_TYPE1) },
    { value: NFT_TYPE2, label: getTextNFTType(NFT_TYPE2) },
    { value: NFT_TYPE3, label: getTextNFTType(NFT_TYPE3) },
  ]
  const [stateSelections, setStateSelections] =
    useState<InterfaceValueLabel[]>(stateOptions)
  const [typeSelections, setTypeSelections] =
    useState<InterfaceValueLabel[]>(typeOptions)

  // Fetch data
  const { nftCollection, getNFTCollection } = useWallet()
  useEffect(() => {
    getNFTCollection()
  }, [getNFTCollection])

  return (
    <Box {...rest}>
      <BackButton
        text={`${nftCollection?.nftContract} (${nftCollection?.balance})`}
        marginTop="40px"
      />

      <Flex
        flexFlow="row wrap"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <Box>
          <Flex flexFlow="row wrap">
            <SelectMultiple
              placeholder="Type"
              options={typeOptions}
              selections={typeSelections}
              setSelections={setTypeSelections}
              __css={styles.filterBox}
              buttonStyle={styles.filterBoxButton}
              expandStyle={styles.filterBoxExpand}
            />

            <SelectMultiple
              placeholder="State"
              options={stateOptions}
              selections={stateSelections}
              setSelections={setStateSelections}
              __css={styles.filterBox}
              buttonStyle={styles.filterBoxButton}
              expandStyle={styles.filterBoxExpand}
            />
          </Flex>

          <Flex flexFlow="row wrap" width={{ lg: '864px' }} marginTop="24px">
            {nftCollection &&
              nftCollection.nftItems.map((nftItem: INftDTO) => (
                <Box key={nftItem.id}>
                  {stateSelections.some(
                    (item) => nftItem.state === item.value
                  ) &&
                    typeSelections.some(
                      (item) => nftItem.type === item.value
                    ) && (
                      <Link
                        href={`${PATH_WALLET}/nft/${nftCollection.nftContract}/${nftItem.id}`}
                      >
                        <NFTCollectionCard
                          nftItem={nftItem}
                          marginRight="24px"
                          marginBottom="24px"
                          cursor="pointer"
                        ></NFTCollectionCard>
                      </Link>
                    )}
                </Box>
              ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
