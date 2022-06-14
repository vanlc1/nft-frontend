import { useState } from 'react'
import { Box, Container, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'
import Link from 'next/link'

import { IArrowDropDown } from 'components/Icons'
import { PATH_HOME } from 'config'

export const Header = () => {
  const [language, setLanguage] = useState('vi')
  return (
    <Flex
      backgroundImage="/assets/images/header.svg"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="140px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Link href={PATH_HOME}>
            <Flex alignItems="center" cursor="pointer">
              <Image
                objectFit="cover"
                src="/assets/images/logo.svg"
                alt="logo"
                marginRight="10px"
              />
              <Box
                fontSize={{ base: '20px', md: '30px' }}
                color="#FFFFFF"
                fontWeight="bold"
              >
                Wallet Name
              </Box>
            </Flex>
          </Link>

          <Box>
            <Menu>
              <MenuButton
                as={Button}
                border="1px solid white"
                color="white"
                height="44px"
                bg="none"
                rightIcon={<IArrowDropDown />}
              >
                <Flex justifyContent="center" alignItems="center">
                  <Box display={{ base: 'none', md: 'block' }}>
                    {language === 'vi' ? (
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="/assets/images/flagvn.svg"
                        alt="flagvn"
                        mr="5px"
                      />
                    ) : (
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src="/assets/images/flagusa.svg"
                        alt="flagvn"
                        mr="5px"
                      />
                    )}
                  </Box>
                  <Box mr="10px">{language === 'vi' ? 'VI' : 'EN'}</Box>
                </Flex>
              </MenuButton>
              <MenuList minW="100px">
                <MenuItem minH="48px" onClick={() => setLanguage('vi')}>
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="/assets/images/flagvn.svg"
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                  />
                  <span>VI</span>
                </MenuItem>
                <MenuItem minH="40px" onClick={() => setLanguage('en')}>
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="/assets/images/flagusa.svg"
                    alt="Simon the pensive"
                    mr="12px"
                  />
                  <span>EN</span>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Flex>
  )
}
