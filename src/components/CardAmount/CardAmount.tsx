import React, { useEffect, useState } from 'react'
import { Box, Heading, Flex, Text } from '@chakra-ui/layout'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { Tooltip } from '@chakra-ui/tooltip'
import { IIconInfo, CustomerSelect, IComplete, IWarningTwo } from 'components'
import { useAuth } from 'hook'

import { CardAmoutProps } from './CardAmount.types'
import useStyles from './CardAmount.style'
const options = [{ label: 'ETH', value: 'ETH' }]

export const CardAmount = ({ onNextStep }: CardAmoutProps) => {
  const [value, setValue] = useState(options[0].label)
  const [rangeOfToken, setRangeOfToken] = useState('')
  const { handleGetBalanceUser, balanceUser } = useAuth()
  const styles = useStyles()
  const max_token = balanceUser ? balanceUser.toString() : '0'
  useEffect(() => {
    handleGetBalanceUser()
  }, [handleGetBalanceUser])
  const handleUseMax = () => {
    setRangeOfToken(max_token)
  }
  const checkSendable = (range: string) => {
    if (parseFloat(range) <= parseFloat(max_token) && parseFloat(range) > 0) {
      return true
    }
    return false
  }
  const checkMaxAmount = (range: string) => {
    return parseFloat(range) > parseFloat(max_token) ? true : false
  }
  const handleOnChangeInput = (e: any) => {
    setRangeOfToken(e.target.value)
  }
  const renderGasFee = () => {
    let html = null
    html = (
      <>
        <Box __css={styles.boxRederGasStyle} />
        <Flex justifyContent="space-between" marginTop="17px">
          <Box fontSize="12px" fontWeight="400" color="inkGray.40">
            Estimated Gas Fee
          </Box>
          <Box fontSize="16px" fontWeight="600">
            0.01 ETH
          </Box>
        </Flex>
      </>
    )
    return html
  }
  return (
    <Box __css={styles.boxWrapperStyle}>
      <Box __css={styles.box1ChildStyle}>
        <Box>
          <Heading padding="15px 25px" size="md">
            Amount
          </Heading>
          <Box __css={styles.box2ChildStyle} />
          <Box padding="25px">
            <CustomerSelect options={options} setLanguage={setValue} />

            <InputGroup>
              <Input
                type="number"
                value={rangeOfToken}
                onChange={(e) => handleOnChangeInput(e)}
                borderRadius="10px"
                marginTop="25px"
                placeholder="0"
                border="1px solid"
                borderColor="gray.40"
              />
              <InputRightElement marginRight="15px" width="auto" top="25px">
                {rangeOfToken === '0' ||
                rangeOfToken === '' ||
                rangeOfToken === '0.' ? (
                  <>
                    <Box __css={styles.boxUseMaxStyle} onClick={handleUseMax}>
                      Use Max
                    </Box>
                    <Tooltip
                      hasArrow
                      label="Max amount of transferable token excluding estimated gas fee"
                      placement="bottom-end"
                      bg="#E1EDFA"
                      fontSize="10px"
                      fontWeight="400"
                      color="#007AFF"
                      maxWidth="215px"
                      padding="8px 12px"
                      textAlign="center"
                    >
                      <Box cursor="pointer">
                        <IIconInfo />
                      </Box>
                    </Tooltip>
                  </>
                ) : checkSendable(rangeOfToken) ? (
                  <IComplete />
                ) : (
                  <Tooltip
                    hasArrow
                    label="Max amount of transferable token excluding estimated gas fee"
                    placement="bottom-end"
                    bg="#E1EDFA"
                    fontSize="10px"
                    fontWeight="400"
                    color="#007AFF"
                    maxWidth="215px"
                    padding="8px 12px"
                    textAlign="center"
                  >
                    <Box cursor="pointer">
                      <IWarningTwo />
                    </Box>
                  </Tooltip>
                )}
              </InputRightElement>
            </InputGroup>
            {checkMaxAmount(rangeOfToken) && (
              <Text marginTop="10px" fontSize="12px" color="#DC402B">
                Input amount exceed yor current balance
              </Text>
            )}
            <Flex justifyContent="space-between" marginTop="17px">
              <Box fontSize="12px" fontWeight="400" color="inkGray.40">
                Balance
              </Box>
              <Box fontSize="16px" fontWeight="600">
                {max_token} {value}
              </Box>
            </Flex>

            {checkSendable(rangeOfToken) ? renderGasFee() : null}
          </Box>
        </Box>
        <Box padding="25px">
          <Button
            disabled={!checkSendable(rangeOfToken)}
            width="100%"
            onClick={() => onNextStep(parseFloat(rangeOfToken))}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
