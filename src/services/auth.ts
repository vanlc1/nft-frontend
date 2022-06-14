import { axios } from 'utils'

import {
  API_LOGIN_WITH_EMAIL,
  API_VERIFY_OTP,
  API_RESEND_OTP,
  API_SIGN_IN_WITH_GOOGLE,
  API_SIGN_IN_WITH_FACEBOOK,
  API_SIGN_IN_WITH_APPLE,
  API_GET_USER_PROFILE,
  API_LOG_OUT,
  API_USER_GET_BALANCE,
} from 'config'

import { IUserDTO } from 'types'

export interface VerifyEmailReturn {
  userId: string
  transactionId: string
  email: string
}

export interface VerifyOTPReturn {
  accessToken: string
  refreshToken: string
}

export const verifyEmail = async (email: string) => {
  try {
    const {
      data: { data },
    } = await axios.post(API_LOGIN_WITH_EMAIL, { email })

    const res: VerifyEmailReturn = {
      userId: data.id,
      transactionId: data.transactionId,
      email,
    }
    return res
  } catch (error) {
    return Promise.reject(error)
  }
}

export const verifyOtp = async (
  transactionId: string,
  otp: string,
  id: string
) => {
  try {
    const {
      data: { data },
    } = await axios.post(API_VERIFY_OTP, {
      transactionId,
      emailOtp: otp,
      id,
    })
    const res: VerifyOTPReturn = {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
    }

    return res
  } catch (error) {
    return Promise.reject(error)
  }
}

export const resendOtp = async (email: string) => {
  try {
    return await axios.post(API_RESEND_OTP, { email })
  } catch (error) {
    return Promise.reject(error)
  }
}

export const signInWithGoogle = async (token: string) => {
  try {
    const {
      data: { data },
    } = await axios.post(API_SIGN_IN_WITH_GOOGLE, { token })
    const res: VerifyOTPReturn = {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
    }

    return res
  } catch (error) {
    return Promise.reject(error)
  }
}

export const signInWithFacebook = async (token: string) => {
  try {
    const {
      data: { data },
    } = await axios.post(API_SIGN_IN_WITH_FACEBOOK, { token })
    const res: VerifyOTPReturn = {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
    }

    return res
  } catch (error) {
    return Promise.reject(error)
  }
}

export const signInWithApple = async (token: string) => {
  try {
    const {
      data: { data },
    } = await axios.post(API_SIGN_IN_WITH_APPLE, { token })
    const res: VerifyOTPReturn = {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
    }

    return res
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getUserProfile = async (token: string) => {
  try {
    const {
      data: { result },
    } = await axios.post(API_GET_USER_PROFILE, {
      jsonrpc: '2.0',
      method: 'vgc_getProfile',
      params: [token],
      id: 1,
    })

    const res: IUserDTO = {
      email: result.email,
      userName: result.username,
      userId: result.userId,
      walletAddress: result.walletAddress,
      signerAddress: result.signerAddress,
    }

    return res
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getBalance = async (walletAddress: string) => {
  try {
    const {
      data: { result },
    } = await axios.post(API_USER_GET_BALANCE, {
      jsonrpc: '2.0',
      method: 'eth_getBalance',
      params: {
        address: walletAddress,
        block: 'latest',
      },
      id: 1,
    })

    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const onLogout = async (token: string) => {
  try {
    // call api logout here
    return await axios.post(API_LOG_OUT, {
      jsonrpc: '2.0',
      method: 'vgc_revokeAccessToken',
      params: [token],
      id: 1,
    })
  } catch (error) {
    return Promise.reject(error)
  }
}
