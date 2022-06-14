import { baseTheme } from 'themes'
import { ISysMarketplaceProps } from './ISysMarketplace.type'

export const ISysMarketplace = (props: ISysMarketplaceProps) => {
  const { isClicked } = props
  const mainFillColor = isClicked
    ? baseTheme.colors.green['50']
    : baseTheme.colors.inkGray['50']

  const secFillColor = isClicked
    ? baseTheme.colors.orange['40']
    : baseTheme.colors.white

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
          d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM12 6C11.4477 6 11 6.44772 11 7V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V7C13 6.44772 12.5523 6 12 6ZM7 10C7 9.44772 7.44772 9 8 9C8.55228 9 9 9.44772 9 10V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V10ZM16 12C15.4477 12 15 12.4477 15 13V17C15 17.5523 15.4477 18 16 18C16.5523 18 17 17.5523 17 17V13C17 12.4477 16.5523 12 16 12Z"
          fill={mainFillColor}
        />
        <rect x="11" y="10" width="2" height="8" rx="1" fill={secFillColor} />
        <rect x="7" y="12" width="2" height="6" rx="1" fill={secFillColor} />
        <rect x="15" y="14" width="2" height="4" rx="1" fill={secFillColor} />
      </svg>
    </>
  )
}
