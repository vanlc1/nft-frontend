import { ChakraProvider } from '@chakra-ui/provider'
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'
import { baseTheme } from 'themes'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <ChakraProvider theme={baseTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </RecoilRoot>
  )
}

export default MyApp
