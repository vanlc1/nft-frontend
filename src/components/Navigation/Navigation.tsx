import { Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { Menu, MenuButton, MenuList } from '@chakra-ui/menu'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'

import { useAuth } from 'hook'

import { baseTheme } from 'themes'
import {
  ISysDex,
  ISysWallet,
  ISysMarketplace,
  ISysDiscover,
  ProfileCirc,
  IArrowDropDown,
  ISysHistory,
  ISysSetting,
  ISysLogout,
} from 'components'

import {
  PATH_HOME,
  PATH_WALLET,
  PATH_DEX,
  PATH_MARKETPLACE,
  PATH_DISCOVERY,
  PATH_HISTORY,
  PATH_SETTING,
  PATH_LOGOUT,
  PATH_LOGIN,
} from 'config'

import { userAtom } from 'atoms'

import useStyles from './Navigation.styles'
import { NavigationProps } from './Navigation.type'

export const Navigation = (props: NavigationProps) => {
  const { location, padding } = props
  const { handleLogout } = useAuth()
  const router = useRouter()
  const styles = useStyles()
  const [user] = useRecoilState(userAtom)

  // User info
  const walletName = 'Wallet Name'
  const accProfilePicSrc = '/assets/images/profilePic.svg'

  // Nav items
  const allNavObjs = [
    {
      path: PATH_WALLET,
      name: 'Wallet',
      icon: <ISysWallet isClicked={location.includes(PATH_WALLET)} />,
    },
    {
      path: PATH_DEX,
      name: 'DEX',
      icon: <ISysDex isClicked={location.includes(PATH_DEX)} />,
    },
    {
      path: PATH_MARKETPLACE,
      name: 'Marketplace',
      icon: <ISysMarketplace isClicked={location.includes(PATH_MARKETPLACE)} />,
    },
    {
      path: PATH_DISCOVERY,
      name: 'Discover',
      icon: <ISysDiscover isClicked={location.includes(PATH_DISCOVERY)} />,
    },
  ]

  // User pref items
  const allUserPrefObjs = [
    {
      path: PATH_HISTORY,
      name: 'History',
      icon: <ISysHistory />,
      handleFunc: () => {
        router.push(PATH_HISTORY)
      },
    },
    {
      path: PATH_SETTING,
      name: 'Setting',
      icon: <ISysSetting />,
      handleFunc: () => {
        router.push(PATH_SETTING)
      },
    },
    {
      path: PATH_LOGOUT,
      name: 'Log Out',
      icon: <ISysLogout />,
      handleFunc: async () => {
        try {
          await handleLogout()
          router.push(PATH_LOGIN)
        } catch (error) {
          return Promise.reject(error)
        }
      },
    },
  ]

  return (
    <Box __css={styles.container} padding={padding}>
      <Link href={PATH_HOME}>
        <Box __css={styles.homeContainer}>
          <Image __css={styles.logo} src="/assets/images/logo.svg" alt="logo" />
          <Box __css={styles.walletName}>{walletName}</Box>
        </Box>
      </Link>

      <Box __css={styles.navAllContainer}>
        {allNavObjs.map((navObj) => (
          <Link key={navObj.path} href={navObj.path}>
            <Box
              __css={styles.navAlignContainer}
              borderBottom={
                location.includes(navObj.path) ? `2px solid` : 'none'
              }
              borderBottomColor="green.50"
            >
              <Box __css={styles.navContainer}>
                <Box __css={styles.navIcon}>{navObj.icon}</Box>
                <Box __css={styles.nav}>{navObj.name}</Box>
              </Box>
            </Box>
          </Link>
        ))}

        <Box __css={styles.menuContainer}>
          <Menu>
            <MenuButton>
              <Box __css={styles.menuButton}>
                <ProfileCirc
                  src={accProfilePicSrc}
                  width="44px"
                  height="44px"
                  marginRight={{
                    base: '0px',
                    sm: '0px',
                    md: '8px',
                    lg: '8px',
                  }}
                />
                <IArrowDropDown
                  color={baseTheme.colors.inkGray['50']}
                  __css={styles.menuButtonArrowDropDown}
                />
              </Box>
            </MenuButton>

            <MenuList>
              <Box __css={styles.menuBoxContainer}>
                <Box __css={styles.accContainer}>
                  <ProfileCirc
                    src={accProfilePicSrc}
                    width="50px"
                    height="50px"
                    marginRight="12px"
                  />
                  <Box>
                    <Box __css={styles.accName}>{user?.userName}</Box>
                    <Box __css={styles.accEmail}>{user?.email}</Box>
                  </Box>
                </Box>

                {allUserPrefObjs.map((userPrefObj) => (
                  <Box key={userPrefObj.path}>
                    <Box __css={styles.menuDivide} />
                    <Box
                      __css={styles.userPrefContainer}
                      onClick={userPrefObj.handleFunc}
                    >
                      {userPrefObj.icon}
                      <Box __css={styles.userPref}>{userPrefObj.name}</Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  )
}
