import { IDeleteProps } from './IDelete.type'

export const IDelete = (props: IDeleteProps) => {
  const { color, width, height } = props

  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 9 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.821615 10.0833C0.821615 10.725 1.34661 11.25 1.98828 11.25H6.65495C7.29662 11.25 7.82162 10.725 7.82162 10.0833V3.08333H0.821615V10.0833ZM8.40495 1.33333H6.36328L5.77995 0.75H2.86328L2.27995 1.33333H0.238281V2.5H8.40495V1.33333Z"
          fill={color}
        />
      </svg>
    </>
  )
}
