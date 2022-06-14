import { useState } from 'react'

import { useRouter } from 'next/router'
import type { NextPage } from 'next'

import { Box, Container, Flex, Spacer } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

import { withAuth } from 'hoc'
import {
  BackButton,
  CardAmount,
  ConfirmInventory,
  SendTo,
  Steps,
} from 'components'

const tokenStepOptions = [
  { label: 'Send to' },
  { label: 'Amount' },
  { label: 'Confirm' },
]

type UserType = {
  userName: string
  walletAddress: string
  image: string
}

type SendInfoType = {
  tokenAmount?: number
  user?: UserType
}

const initialSendInfo: SendInfoType = {
  tokenAmount: 0,
  user: {
    userName: '',
    walletAddress: '',
    image: '',
  },
}

const TokenSendTo: NextPage = () => {
  const router = useRouter()
  const [sendInfo, setSendInfo] = useState<SendInfoType>(initialSendInfo)

  const handleChangeStep = (
    step: number,
    key: string,
    value: UserType | number
  ) => {
    setCurrentStep(step)
    setSendInfo({ ...sendInfo, [key]: value })
  }

  const TOKEN_STEP = {
    SEND_TO: {
      KEY: 0,
      VALUE: (
        <SendTo
          onNextStep={(user: UserType) =>
            handleChangeStep(TOKEN_STEP.AMOUNT.KEY, 'user', user)
          }
        ></SendTo>
      ),
    },
    AMOUNT: {
      KEY: 1,
      VALUE: (
        <CardAmount
          onNextStep={(tokenAmount: number) =>
            handleChangeStep(TOKEN_STEP.CONFIRM.KEY, 'tokenAmount', tokenAmount)
          }
        ></CardAmount>
      ),
    },
    CONFIRM: {
      KEY: 2,
      VALUE: <ConfirmInventory sendInfo={sendInfo}></ConfirmInventory>,
    },
  }
  const [currentStep, setCurrentStep] = useState(TOKEN_STEP.SEND_TO.KEY)

  const stepRender = () => {
    switch (currentStep) {
      case TOKEN_STEP.AMOUNT.KEY:
        return TOKEN_STEP.AMOUNT.VALUE
      case TOKEN_STEP.CONFIRM.KEY:
        return TOKEN_STEP.CONFIRM.VALUE
      default:
        return TOKEN_STEP.SEND_TO.VALUE
    }
  }
  return (
    <Box minHeight="100vh" backgroundColor="green.5" gap="5px">
      <Flex justifyContent="space-between">
        <Box pt="35px" pl="100px">
          <BackButton text="Back" />
        </Box>
        <Spacer />
        <Box pt="35px" pr="100px">
          <Button
            backgroundColor="transparent"
            color="inkGray.60"
            fontSize="h3"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
        </Box>
      </Flex>
      <Container maxW="460px">
        <Steps currentStep={currentStep} steps={tokenStepOptions}>
          {stepRender()}
        </Steps>
      </Container>
    </Box>
  )
}

export default withAuth(TokenSendTo)
