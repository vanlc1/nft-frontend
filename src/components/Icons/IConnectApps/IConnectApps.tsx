interface PropsInterFace {
  color?: string
}
export const IConnectApps = (props: PropsInterFace) => {
  const { color } = props
  return (
    <>
      <svg
        width="20"
        height="11"
        viewBox="0 0 20 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 8.73535H8C8.55 8.73535 9 9.18535 9 9.73535C9 10.2854 8.55 10.7354 8 10.7354H5C2.24 10.7354 0 8.49535 0 5.73535C0 2.97535 2.24 0.735352 5 0.735352H8C8.55 0.735352 9 1.18535 9 1.73535C9 2.28535 8.55 2.73535 8 2.73535H5C3.35 2.73535 2 4.08535 2 5.73535C2 7.38535 3.35 8.73535 5 8.73535ZM15 0.735352H12C11.45 0.735352 11 1.18535 11 1.73535C11 2.28535 11.45 2.73535 12 2.73535H15C16.65 2.73535 18 4.08535 18 5.73535C18 7.38535 16.65 8.73535 15 8.73535H12C11.45 8.73535 11 9.18535 11 9.73535C11 10.2854 11.45 10.7354 12 10.7354H15C17.76 10.7354 20 8.49535 20 5.73535C20 2.97535 17.76 0.735352 15 0.735352ZM6 5.73535C6 6.28535 6.45 6.73535 7 6.73535H13C13.55 6.73535 14 6.28535 14 5.73535C14 5.18535 13.55 4.73535 13 4.73535H7C6.45 4.73535 6 5.18535 6 5.73535Z"
          fill={color}
        />
      </svg>
    </>
  )
}