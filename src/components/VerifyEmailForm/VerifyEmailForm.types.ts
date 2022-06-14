import { BoxProps } from '@chakra-ui/layout'
import { VerifyEmailReturn } from 'services'

export interface LoginFormProps extends BoxProps {
  // eslint-disable-next-line no-unused-vars
  onSuccess?: (data: VerifyEmailReturn) => void
}

export interface VerifyEmailFormData {
  email: string
}
