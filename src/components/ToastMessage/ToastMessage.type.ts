import { ToastPosition } from '@chakra-ui/toast'

export interface ToastProps {
  title: string
  isClosable?: boolean
  position: ToastPosition | undefined
  duration: number
  status: 'info' | 'warning' | 'success' | 'error' | 'loading' | undefined
  displayToast: number
  setDisplayToast: () => void
}
