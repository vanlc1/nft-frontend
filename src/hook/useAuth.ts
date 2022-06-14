import { useCallback, useState } from 'react'
import { useRecoilState } from 'recoil'

import { getStorage, setStorage, removeStorage } from 'helper'
import { STORAGE_TOKEN } from 'config'
import { userAtom } from 'atoms'
import { getUserProfile, onLogout, getBalance } from 'services'

export const getToken = () => getStorage(STORAGE_TOKEN)
export const setToken = (value: string) => setStorage(STORAGE_TOKEN, value)
export const removeToken = () => removeStorage(STORAGE_TOKEN)

export const useAuth = () => {
  const [user, setUser] = useRecoilState(userAtom)
  const [balanceUser, setBalanceUser] = useState(0)
  const [isBalanceLoading, setBalanceLoading] = useState(false)
  const [isProfileLoading, setProfileLoading] = useState(false)

  const getProfile = useCallback(async () => {
    const token = getToken()
    try {
      setProfileLoading(true)
      // Token does not existed
      if (!token) {
        throw new Error('Missing token')
      }

      const data = await getUserProfile(token.replaceAll(`"`, ''))
      setUser(data)
    } catch (error) {
      setUser(null)
      removeToken()
      return Promise.reject(error)
    } finally {
      setProfileLoading(false)
    }
  }, [setUser])

  const handleGetBalanceUser = useCallback(async () => {
    try {
      setBalanceLoading(true)
      const data = await getBalance(user?.walletAddress || '')
      let hexString = data.toString(16)
      const res = parseInt(hexString, 16) / Math.pow(10, 18)

      setBalanceUser(res)
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setBalanceLoading(false)
    }
  }, [user?.walletAddress])

  const handleLogout = async () => {
    const token = getToken()
    try {
      // call api logout
      if (!token) {
        throw new Error('Missing token')
      }
      await onLogout(token.replaceAll(`"`, ''))
    } catch (error) {
      return Promise.reject(error)
    } finally {
      // clear user state and token
      setUser(null)
      removeToken()
    }
  }

  return {
    user,
    balanceUser,
    isProfileLoading,
    isBalanceLoading,
    handleLogout,
    getToken,
    setToken,
    removeToken,
    getProfile,
    handleGetBalanceUser,
  }
}
