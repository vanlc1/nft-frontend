import React, { useEffect, useState } from 'react'
import { Image } from '@chakra-ui/image'
import {
  Box,
  Container,
  Flex,
  Spacer,
  Stack,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/layout'
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/input'
import { SearchIcon } from '@chakra-ui/icons'

import { Modal, IDelete, IEdit } from 'components'
import { API_GET_ADDRESS_BOOK } from 'config'

import useStyles from './AddressBook.styles'
import { baseTheme } from 'themes'

interface AddressBookProps {
  isOpen: boolean
  onClose: () => void
}

export const AddressBook = (props: AddressBookProps) => {
  const { isOpen, onClose } = props
  const [searchValue, setSearchValue] = useState('')
  const [addressItems, setAddressItems]: any[] = useState([])

  const onSearch = (value: string) => {
    setSearchValue(value)
  }

  async function fetchData() {
    const res = await fetch(API_GET_ADDRESS_BOOK)
    const data = await res.json()
    setAddressItems(data.result)
  }

  async function searchContact(keyword: string) {
    const res = await fetch(API_GET_ADDRESS_BOOK)
    const data = await res.json()
    const contacts = [...data.result].filter((x: any) =>
      x.nickName?.toUpperCase().includes(keyword.toUpperCase())
    )

    setAddressItems(contacts)
  }

  function deleteContact(userId: string) {
    setAddressItems(addressItems.filter((x: any) => x.userId !== userId))
  }

  useEffect(() => {
    fetchData()
  }, [isOpen])

  useEffect(() => {
    if (searchValue !== '') searchContact(searchValue)
    else fetchData()
  }, [searchValue])

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Address Book"
      width={425}
      contentCSS={{ borderRadius: '20px' }}
      headerCSS={{ fontSize: '16px', lineHeight: '28px' }}
      bodyCSS={{ padding: '0 !important' }}
    >
      <Stack spacing={4}>
        <InputGroup
          borderRadius="10px"
          borderColor="skyGray.30"
          backgroundColor="skyGray.30"
          mx="6"
          w="auto"
        >
          <InputLeftElement pointerEvents="none" height="36px">
            <SearchIcon color="inkGray.40" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search"
            height="36px"
            _placeholder={{ color: 'inkGray.30' }}
            value={searchValue}
            onChange={(e) => onSearch(e.currentTarget.value)}
          />
        </InputGroup>
        <VStack
          divider={<StackDivider borderColor="skyGray.30" my="0 !important" />}
          align="stretch"
          maxH={360}
          overflow="auto"
          boxSizing="border-box"
          display="inline-block"
        >
          {addressItems &&
            addressItems.map((addressItem: AddressItemProps) => (
              <AddressItem
                key={addressItem.userId}
                {...addressItem}
                onDelete={() => deleteContact(addressItem.userId)}
              />
            ))}
        </VStack>
      </Stack>
    </Modal>
  )
}

interface AddressItemProps {
  userId: string
  userPic: string
  userName: string
  walletAddress: string
  nickName: string
  onDelete: () => void
}

export const AddressItem = (props: AddressItemProps) => {
  const styles = useStyles()
  const { userPic, userName, walletAddress, nickName, onDelete } = props
  const [isEdit, setIsEdit] = useState(false)
  const [newAddressTitle, setNewAddressTitle] = useState(nickName)

  const onEdit = () => {
    setIsEdit(true)
  }

  return (
    <Container
      maxW="md"
      color="white"
      px="6"
      py="4"
      display="flex"
      _hover={{ bg: 'green.10' }}
    >
      <Image
        src={userPic}
        alt="addressPic"
        width="32px"
        height="32px"
        objectFit="contain"
        borderRadius="full"
        border="1px solid #1BE3B4"
        padding="1px"
        my="auto"
      />
      <Flex alignItems="center" ml="8px" w="full">
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Text sx={styles.addressItemName}>{userName} </Text>
          <Text sx={styles.addressItemToken}>{walletAddress}</Text>
        </Box>
        <Spacer />
        <Box display="flex" position="relative">
          {!isEdit ? (
            <Text sx={styles.addressItemTitle}> {nickName}</Text>
          ) : (
            <Input
              placeholder="Basic usage"
              sx={styles.addressItemTitleEdit}
              value={newAddressTitle}
              onChange={(e) => setNewAddressTitle(e.currentTarget.value)}
            />
          )}
          <Spacer />
          <Box ml="12px" my="auto" cursor="pointer" onClick={() => onEdit()}>
            <IEdit color={baseTheme.colors.green[70]} width={11} height={12} />
          </Box>
          <Box
            ml="14px"
            my="auto"
            cursor="pointer"
            float="right"
            onClick={() => onDelete()}
          >
            <IDelete color="#FF6058" width={9} height={12} />
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}
