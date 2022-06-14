import { Box } from '@chakra-ui/layout'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react'

import useStyles from './NFTDetailCardInfoExtra.styles'
import { NFTDetailCardInfoExtraProps } from './NFTDetailCardInfoExtra.types'

export const NFTDetailCardInfoExtra = (props: NFTDetailCardInfoExtraProps) => {
  const { nftItem } = props
  console.log(nftItem) // TODO

  const styles = useStyles()

  // other stuff
  const extraInfo = [
    {
      name: 'Properties',
      items: [
        {
          name: 'Background',
          val1: 'Green',
          val2: '10%',
        },
        {
          name: 'Body',
          val1: 'Spikes',
          val2: '8%',
        },
        {
          name: 'Head',
          val1: 'Mushroom',
          val2: '8%',
        },
        {
          name: 'Type',
          val1: 'Iron Yellow',
          val2: '7%',
        },
      ],
    },
    {
      name: 'History',
      items: [
        {
          name: 'Background',
          val1: 'Green',
          val2: '10%',
        },
        {
          name: 'Body',
          val1: 'Spikes',
          val2: '8%',
        },
      ],
    },
  ]

  return (
    <Accordion allowToggle width="100%">
      {extraInfo.map((infoItem, index) => (
        <AccordionItem key={index} border="none">
          <AccordionButton padding="0px">
            <Box __css={styles.extraInfoTabButton}>
              <Box __css={styles.extraInfoTabButtonName}>{infoItem.name}</Box>
              <AccordionIcon />
            </Box>
          </AccordionButton>

          <AccordionPanel padding="12px 0px 0px 0px">
            <Box __css={styles.extraInfoTabContainer}>
              {infoItem.items.map((nftProperty, index) => (
                <Box
                  key={nftProperty.name}
                  __css={styles.extraInfoGroup}
                  borderBottom={
                    (index === infoItem.items.length - 1 && 'none') ||
                    '1px solid'
                  }
                  borderBottomColor="skyGray.30"
                >
                  <Box __css={styles.extraInfoName}>{nftProperty.name}</Box>
                  <Box __css={styles.infoVal}>{nftProperty.val1}</Box>
                  <Box __css={styles.infoVal}>{nftProperty.val2}</Box>
                </Box>
              ))}
            </Box>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
