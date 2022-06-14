export interface ICloseProps {
  color?: string
}

export const IClose = ({ color = 'black' }: ICloseProps) => {
  return (
    <>
      <svg
        width="15"
        height="14"
        viewBox="0 0 15 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.8827 1.00585C13.6959 0.818602 13.4423 0.713369 13.1777 0.713369C12.9132 0.713369 12.6596 0.818602 12.4727 1.00585L7.58273 5.88585L2.69273 0.995855C2.5059 0.808602 2.25225 0.703369 1.98773 0.703369C1.72322 0.703369 1.46957 0.808602 1.28273 0.995855C0.892734 1.38585 0.892734 2.01585 1.28273 2.40585L6.17273 7.29585L1.28273 12.1859C0.892734 12.5759 0.892734 13.2059 1.28273 13.5959C1.67273 13.9859 2.30273 13.9859 2.69273 13.5959L7.58273 8.70585L12.4727 13.5959C12.8627 13.9859 13.4927 13.9859 13.8827 13.5959C14.2727 13.2059 14.2727 12.5759 13.8827 12.1859L8.99273 7.29585L13.8827 2.40585C14.2627 2.02585 14.2627 1.38585 13.8827 1.00585Z"
          fill={color}
        />
      </svg>
    </>
  )
}
