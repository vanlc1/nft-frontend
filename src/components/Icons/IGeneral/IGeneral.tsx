interface PropsInterFace {
  color?: string
}
export const IGeneral = (props: PropsInterFace) => {
  const { color } = props
  return (
    <>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 6.91479H1.5C0.671573 6.91479 0 6.24322 0 5.41479C0 4.58637 0.671573 3.91479 1.5 3.91479H10V6.91479Z"
          fill={color}
        />
        <path
          d="M4 12.9148V11.4148C4 10.5864 4.67157 9.91479 5.5 9.91479C6.32843 9.91479 7 10.5864 7 11.4148V17.4148C7 18.2432 6.32843 18.9148 5.5 18.9148C4.67157 18.9148 4 18.2432 4 17.4148V15.9148H1.5C0.671573 15.9148 0 15.2432 0 14.4148C0 13.5864 0.671573 12.9148 1.5 12.9148H4Z"
          fill={color}
        />
        <path
          d="M8 12.9148H16.5C17.3284 12.9148 18 13.5864 18 14.4148C18 15.2432 17.3284 15.9148 16.5 15.9148H8V12.9148Z"
          fill={color}
        />
        <path
          d="M15 6.91479V8.41479C15 9.24322 14.3284 9.91479 13.5 9.91479C12.6716 9.91479 12 9.24322 12 8.41479V2.41479C12 1.58637 12.6716 0.914795 13.5 0.914795C14.3284 0.914795 15 1.58637 15 2.41479V3.91479H17.5C18.3284 3.91479 19 4.58637 19 5.41479C19 6.24322 18.3284 6.91479 17.5 6.91479H15Z"
          fill={color}
        />
      </svg>
    </>
  )
}
