import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDebouncedCallback } from 'use-debounce'
import { useRecoilState } from 'recoil'
import { userAtom } from 'atoms'

import {
  Flex,
  Box,
  Text,
  Spacer,
  VStack,
  StackDivider,
} from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'
import { useDisclosure } from '@chakra-ui/hooks'
import { InputGroup, Input, InputRightElement } from '@chakra-ui/input'
import { Switch } from '@chakra-ui/switch'
import { IconButton, Button } from '@chakra-ui/button'

import { PATH_WALLET } from 'config'
import {
  IWarningTwo,
  IQRCode,
  IClose,
  IComplete,
  IContact,
  AddressBook,
  Card,
  Modal,
  ToastMessage,
} from 'components'
import { IProfileDTO } from 'services'
import { useProfile } from 'hook'

import { SendToProps } from './SendTo.types'
import { inputStyles } from './SendTo.styles'

interface UserProfileCardProps {
  profile: IProfileDTO
  isHiddenAtrr: boolean
  // eslint-disable-next-line no-unused-vars
  onClick?: (info: IProfileDTO) => void
}

const recentAddressList: IProfileDTO[] = [
  {
    image: 'https://bit.ly/dan-abramov',
    userName: 'nftUser6',
    walletAddress: '0x10b734a19661e8972522c01d2e0dd96cf1855abd',
    nickName: 'BEST FRIEND',
  },
]

const initialUserSelected: IProfileDTO = {
  image: '',
  userName: '',
  walletAddress: '',
}

const STATUS_MESSAGE = {
  SAVED: `Contact saved`,
  DUPLICATED: `Receiver's address cannot be the same as your address`,
  INVALID: `Invalid username or address`,
  MISSING_EMAIL: `Please provide email address to transfer your assets`,
}

const DURATION_TYPING = 1000

export const SendTo = ({ onNextStep }: SendToProps) => {
  const router = useRouter()
  const [currentUserSelected, setCurrentUserSelected] =
    useState<IProfileDTO>(initialUserSelected)

  const [user] = useRecoilState(userAtom)
  const { profile, searchProfile } = useProfile()
  const [, setSearchKeyword] = useState('')
  const [isChangeInput, setIsChangeInput] = useState(false)
  const [isShowContactNameModal, setShowContactNameModal] = useState(false)
  const [toggleSaveContact, setToggleSaveContact] = useState(false)
  const [displayToast, setDisplayToast] = useState(0)
  const [isInvalid, setIsInvalid] = useState(false)
  const [contactName, setContactName] = useState<string>('')
  const [statusMessage, setStatusMessage] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (toggleSaveContact) {
      setContactName(currentUserSelected.userName)
      setShowContactNameModal(true)
    }
  }, [currentUserSelected.userName, toggleSaveContact])

  useEffect(() => {
    if (profile) {
      if (profile && Object.keys(profile).length !== 0) {
        setCurrentUserSelected(profile)
        setIsChangeInput(true)
        setIsInvalid(false)
        setStatusMessage('')
      } else {
        setIsInvalid(true)
        setStatusMessage(STATUS_MESSAGE.INVALID)
      }
    }
  }, [profile])

  const debounced = useDebouncedCallback(async (value: string) => {
    setSearchKeyword(value)
    console.log(user)
    if (user && user.walletAddress === '') {
      setSearchError(STATUS_MESSAGE.MISSING_EMAIL)
    } else if (user && user.walletAddress === value) {
      setSearchError(STATUS_MESSAGE.DUPLICATED)
    } else {
      searchProfile(value)
    }
  }, DURATION_TYPING)

  const setSearchError = (errMess: string) => {
    setIsInvalid(true)
    setStatusMessage(errMess)
  }

  const handleSaveContactName = () => {
    setCurrentUserSelected({ ...currentUserSelected, userName: contactName })
    setShowContactNameModal(false)
  }

  const handleCloseContactModal = () => {
    setContactName('')
    setShowContactNameModal(false)
    setToggleSaveContact(false)
  }

  const handleAccept = () => {
    setDisplayToast(1)
  }

  const handleCancel = () => {
    setDisplayToast(0)
    setIsChangeInput(false)
  }

  const handleUserProfileClick = (user: IProfileDTO) => {
    setCurrentUserSelected(user)
    setIsChangeInput(true)
    setIsInvalid(false)
  }

  const BaseInput = () => {
    return (
      <InputGroup>
        <Input {...inputStyles} onChange={(e) => debounced(e.target.value)} />
        <InputRightElement color="gray.300" fontSize="1.2em">
          {isInvalid ? (
            <IWarningTwo />
          ) : (
            <IconButton
              cursor="pointer"
              backgroundColor="transparent"
              aria-label="QR Scan"
              onClick={() => router.push(`${PATH_WALLET}/receive-qr-code`)}
              icon={<IQRCode width={18} color="teal" />}
            ></IconButton>
          )}
        </InputRightElement>
      </InputGroup>
    )
  }

  const UserCardInput = () => {
    return (
      <Flex
        height="48px"
        padding="5px 6px 5px 16px"
        width="100%"
        borderWidth="1px"
        borderColor="skyGray.50"
        alignItems="center"
        placeholder="Type username or address"
        fontSize="14px"
        borderRadius="10px"
        color="inkGray.30"
        marginTop="0px"
      >
        <Box flex={1}>
          <UserProfileCard profile={currentUserSelected} isHiddenAtrr={true} />
        </Box>
        <IconButton
          isRound
          height="20px"
          width="20px"
          aria-label="contact"
          icon={<IComplete />}
          backgroundColor="transparent"
          onClick={handleAccept}
        />
        <IconButton
          isRound
          height="20px"
          width="20px"
          aria-label="contact"
          icon={<IClose />}
          backgroundColor="transparent"
          onClick={handleCancel}
        />
      </Flex>
    )
  }

  const renderAddressBookModal = () => {
    return <AddressBook isOpen={isOpen} onClose={onClose} />
  }

  return (
    <Flex flexDir="column" width="100%" gap="15px">
      <Card
        marginBottom="35px"
        withDivider={true}
        title="Send To"
        titleFontSize="24px"
        padding="16px 24px"
        // height={600}
        borderRadius="20px"
        titleLineHeight="36px"
      >
        <Box mt="30px" mb="22px">
          <Flex flexDir="column" gap="7px">
            <Text fontSize="14px" color="grayy.60">
              To
            </Text>
            {!isChangeInput ? <BaseInput /> : <UserCardInput />}
            {isInvalid ? (
              <Text mt="5px" mr="4px" fontSize="12px" color="red">
                {statusMessage}
              </Text>
            ) : (
              <Flex mt="5px" mr="4px">
                <Text fontSize="12px" color="inkGray.40">
                  Save Contact
                </Text>
                <Spacer />
                <Switch
                  size="md"
                  disabled={!isChangeInput}
                  isChecked={toggleSaveContact}
                  colorScheme="teal"
                  onChange={(evt: any) =>
                    setToggleSaveContact(evt.target.checked)
                  }
                />
              </Flex>
            )}
          </Flex>
        </Box>
        <Box
          backgroundColor="gray.20"
          position="absolute"
          left="0px"
          width="100%"
          // height="400px"
          borderRadius="0px 0px 20px 20px"
          padding="22px 23px"
        >
          <Flex
            gap="13px"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
            height="100%"
          >
            <Flex width="100%" alignItems="center">
              <Text fontSize="16px" color="black" fontWeight="600">
                Recent Address
              </Text>
              <Spacer />
              <IconButton
                isRound
                height="40px"
                width="40px"
                aria-label="contact"
                icon={<IContact />}
                backgroundColor="green.15"
                onClick={() => onOpen()}
              />
            </Flex>
            {renderAddressBookModal()}
            <Box
              borderRight="10px"
              padding="16px"
              backgroundColor="white"
              borderRadius="10px"
              width="100%"
              flex={1}
              minH="50px"
              overflowY="auto"
            >
              <VStack
                spacing={4}
                divider={<StackDivider borderColor="gray.30" />}
                align="stretch"
              >
                {recentAddressList.length > 0 ? (
                  recentAddressList.map((userProfile: IProfileDTO) => (
                    <UserProfileCard
                      key={userProfile.walletAddress}
                      profile={userProfile}
                      isHiddenAtrr={false}
                      onClick={() => handleUserProfileClick(userProfile)}
                    />
                  ))
                ) : (
                  <Text> Empty</Text>
                )}
              </VStack>
            </Box>
            <Button
              mt="30px"
              backgroundColor="teal"
              height="44px"
              width="343px"
              borderRadius="10px"
              onClick={() => onNextStep(currentUserSelected as any)}
              disabled={!isChangeInput}
            >
              Next
            </Button>
          </Flex>
        </Box>
      </Card>
      <Modal
        title="Save Contact Name"
        isOpen={isShowContactNameModal}
        onClose={() => {
          handleCloseContactModal()
        }}
        width={400}
      >
        <Flex flexDir="column" rowGap="40px">
          <Box>
            <Text fontSize="14px" color="grayy.60">
              Contact Name
            </Text>
            <Input
              mt="10px"
              height="44px"
              borderColor="skyGray.50"
              fontSize="14px"
              color="grayy.60"
              borderWidth="1px"
              borderRadius="10px"
              defaultValue={contactName}
              onChange={(evt) => setContactName(evt.target.value)}
            ></Input>
          </Box>
          <Button
            isDisabled={contactName.length === 0}
            height="44px"
            backgroundColor="teal"
            width="100%"
            mb="10px"
            onClick={handleSaveContactName}
          >
            Done
          </Button>
        </Flex>
      </Modal>
      <ToastMessage
        setDisplayToast={() => null}
        displayToast={displayToast}
        duration={3000}
        title="Saved Successfully!"
        position="top"
        status="success"
      />
    </Flex>
  )
}

const UserProfileCard = ({
  profile,
  isHiddenAtrr,
  onClick,
}: UserProfileCardProps) => {
  const { userName, walletAddress, image, nickName } = profile
  let moreProps = {}
  if (onClick) {
    moreProps = { onClick: onClick }
  }
  return (
    <Box {...moreProps}>
      <Flex gap="10px" alignItems="center">
        <Avatar
          padding="2px"
          borderColor="green.20"
          backgroundColor="transparent"
          borderWidth="1px"
          name={userName}
          src={image}
          width="35px"
          height="35px"
        />
        <Box flex={1}>
          <Text
            fontSize="14px"
            color="inkGray.60"
            fontWeight="500"
            maxW="225px"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            {userName}
          </Text>
          <Text
            fontSize="12px"
            color="inkGray.40"
            lineHeight="12px"
            maxW="225px"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            {walletAddress}
          </Text>
        </Box>
        {!isHiddenAtrr && (
          <Text color="inkGray.60" fontSize="12px">
            {nickName}
          </Text>
        )}
      </Flex>
    </Box>
  )
}
