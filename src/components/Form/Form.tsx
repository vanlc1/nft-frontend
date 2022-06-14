import { IFormProps } from './Form.types'

export const Form = ({ children, ...props }: IFormProps) => {
  return <form {...props}>{children}</form>
}
