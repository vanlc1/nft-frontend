import { Box, Text, Flex } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import { useSession, signIn } from 'next-auth/react'

import { signInWithGoogle, signInWithFacebook, signInWithApple } from 'services'
import { IApple, IFacebook, IGoogle, IWechat } from 'components'
import { PATH_WALLET, STORAGE_TOKEN } from 'config'
import { setStorage } from 'helper'

import { SocialNetworkProps } from './SocialNetwork.types'
import useStyles from './SocialNetwork.styles'

export const SocialNetwork = (props: SocialNetworkProps) => {
  const { ...rest } = props
  const styles = useStyles()
  const router = useRouter()

  const { data: session } = useSession()

  const getTokenGoogle = async (token: string) => {
    try {
      const { accessToken } = await signInWithGoogle(token)
      setStorage(STORAGE_TOKEN, accessToken)
      router.push(PATH_WALLET)
    } catch (error) {
      router.push('/test')
    }
  }

  const getTokenFacebook = async (token: string) => {
    try {
      const { accessToken } = await signInWithFacebook(token)
      setStorage(STORAGE_TOKEN, accessToken)
      router.push(PATH_WALLET)
    } catch (error) {
      router.push('/test')
    }
  }
  const getTokenApple = async (token: string) => {
    try {
      const { accessToken } = await signInWithApple(token)
      setStorage(STORAGE_TOKEN, accessToken)
      router.push(PATH_WALLET)
    } catch (error) {
      router.push('/test')
    }
  }

  if (session) {
    if (session.provider === 'google') {
      getTokenGoogle(session.accessToken as string)
    } else if (session.provider === 'facebook') {
      getTokenFacebook(session.accessToken as string)
    } else if (session.provider === 'apple') {
      getTokenApple(session.refresh_token as string)
    }
  }

  return (
    <Box marginTop="76px" alignContent="center" {...rest}>
      <Text color="grayy.50" fontSize="14px">
        or login via Social Networks
      </Text>

      <Flex justifyContent="center" alignItems="center" marginTop="14px">
        <Box __css={styles.wrapIcon} onClick={() => signIn('facebook')}>
          <IFacebook />
        </Box>

        <Box __css={styles.wrapIcon} onClick={() => signIn('google')}>
          <IGoogle />
        </Box>

        <Box __css={styles.wrapIcon} onClick={() => signIn('apple')}>
          <IApple />
        </Box>
        <Box __css={styles.wrapIcon2}>
          <IWechat />
        </Box>
      </Flex>
    </Box>
  )
}
