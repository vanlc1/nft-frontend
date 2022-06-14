import { baseTheme } from 'themes'
import { ISysDiscoverProps } from './ISysDiscover.type'

export const ISysDiscover = (props: ISysDiscoverProps) => {
  const { isClicked } = props
  const mainFillColor = isClicked
    ? baseTheme.colors.green['50']
    : baseTheme.colors.inkGray['50']

  const secFillColor = isClicked
    ? baseTheme.colors.orange['40']
    : baseTheme.colors.white
  const thrdFillColor = isClicked
    ? baseTheme.colors.white
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
          d="M6.44978 3.67796C10.4098 1.03796 15.6888 1.55896 19.0698 4.91796C20.9588 6.80896 22.0088 9.36796 21.9988 12.038C21.9798 16.798 18.5988 20.888 13.9288 21.809C9.24878 22.729 4.56978 20.218 2.75878 15.809C0.938781 11.408 2.47978 6.32796 6.44978 3.67796ZM14.2188 13.858L15.7688 8.91796C15.8098 8.80896 15.8098 8.68796 15.7688 8.57796C15.7298 8.43796 15.6288 8.31796 15.4988 8.24796C15.3698 8.18796 15.2188 8.16796 15.0798 8.21796L10.1388 9.77796C9.96878 9.82796 9.83878 9.96796 9.78978 10.138L8.21878 15.078C8.18878 15.178 8.18878 15.288 8.21878 15.388C8.25878 15.528 8.35978 15.648 8.48978 15.718C8.62878 15.798 8.77978 15.809 8.91878 15.768L13.8598 14.208C14.0298 14.158 14.1598 14.028 14.2188 13.858Z"
          fill={mainFillColor}
        />
        <path
          d="M16.9596 7.95813L14.921 14.4567C14.8434 14.6804 14.6724 14.8514 14.4488 14.9172L7.95025 16.9694C7.76744 17.0233 7.56884 17.0088 7.38602 16.9036C7.21504 16.8115 7.0822 16.6536 7.02959 16.4695C6.99014 16.3379 6.99014 16.1932 7.02959 16.0617L9.09581 9.56305C9.16026 9.33942 9.33124 9.15525 9.55483 9.08947L16.0534 7.03728C16.2362 6.9715 16.4348 6.99781 16.6044 7.07674C16.7754 7.16883 16.9083 7.32669 16.9596 7.51086C17.0135 7.65557 17.0135 7.81474 16.9596 7.95813Z"
          fill={secFillColor}
        />
        <circle cx="12.0215" cy="11.8765" r="1.25" fill={thrdFillColor} />
      </svg>
    </>
  )
}
