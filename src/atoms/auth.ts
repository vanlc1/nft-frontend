import { atom } from 'recoil'
import { IUserDTO } from 'types'

export const USER_KEY = 'auth-user'

export const userAtom = atom<IUserDTO | null>({
  key: USER_KEY,
  default: null,
})
