import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import AppleProvider from 'next-auth/providers/apple'
import FaceBookProdiver from 'next-auth/providers/facebook'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID as string,
      clientSecret: process.env.APPLE_CLIENT_SECRET as string,
    }),

    FaceBookProdiver({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),

    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    error: '/login', // Error code passed in query string as ?error=
  },

  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log('url', url, baseUrl)
      return 'https://ciam.nft.rndengineer.org/login'
    },

    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.provider = account.provider
        token.refreshToken = account.refresh_token
      }
      return token
    },

    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      session.provider = token.provider
      session.refreshToken = token.refreshToken
      return session
    },
  },
})
