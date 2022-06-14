import { baseTheme } from 'themes'
import { ISysWalletProps } from './ISysWallet.type'

export const ISysWallet = (props: ISysWalletProps) => {
  const { isClicked } = props
  const mainFillColor = isClicked
    ? baseTheme.colors.green['50']
    : baseTheme.colors.inkGray['50']
  const secFillColor = isClicked
    ? baseTheme.colors.orange['40']
    : baseTheme.colors.inkGray['50']

  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 16V8C9.5 6.9 10.39 6 11.5 6H20.5V5C20.5 3.9 19.6 3 18.5 3H4.5C3.39 3 2.5 3.9 2.5 5V19C2.5 20.1 3.39 21 4.5 21H18.5C19.6 21 20.5 20.1 20.5 19V18H11.5C10.39 18 9.5 17.1 9.5 16ZM12.5 8C11.95 8 11.5 8.45 11.5 9V15C11.5 15.55 11.95 16 12.5 16H21.5V8H12.5ZM14 12C14 12.83 14.67 13.5 15.5 13.5C16.33 13.5 17 12.83 17 12C17 11.17 16.33 10.5 15.5 10.5C14.67 10.5 14 11.17 14 12Z"
          fill={mainFillColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5 9C11.5 8.45 11.95 8 12.5 8H21.5V16H12.5C11.95 16 11.5 15.55 11.5 15V9ZM14 12C14 12.83 14.67 13.5 15.5 13.5C16.33 13.5 17 12.83 17 12C17 11.17 16.33 10.5 15.5 10.5C14.67 10.5 14 11.17 14 12Z"
          fill={secFillColor}
        />
      </svg>
    </>
  )
}
