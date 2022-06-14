export interface IPropsWarningTwo {
  color?: string
}

export const IWarningTwo = ({ color = '#DC402B' }: IPropsWarningTwo) => {
  return (
    <>
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.4258 15.7734C10.9781 15.7734 11.4258 15.3257 11.4258 14.7734C11.4258 14.2212 10.9781 13.7734 10.4258 13.7734C9.8735 13.7734 9.42578 14.2212 9.42578 14.7734C9.42578 15.3257 9.8735 15.7734 10.4258 15.7734Z"
          fill={color}
        />
        <path
          d="M11.4258 6.77344C11.4258 6.22115 10.9781 5.77344 10.4258 5.77344C9.8735 5.77344 9.42578 6.22115 9.42578 6.77344V11.7734C9.42578 12.3257 9.8735 12.7734 10.4258 12.7734C10.9781 12.7734 11.4258 12.3257 11.4258 11.7734V6.77344Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.425781 10.7734C0.425781 5.25059 4.90293 0.773438 10.4258 0.773438C15.9486 0.773438 20.4258 5.25059 20.4258 10.7734C20.4258 16.2963 15.9486 20.7734 10.4258 20.7734C4.90293 20.7734 0.425781 16.2963 0.425781 10.7734ZM10.4258 2.77344C6.0075 2.77344 2.42578 6.35516 2.42578 10.7734C2.42578 15.1917 6.0075 18.7734 10.4258 18.7734C14.8441 18.7734 18.4258 15.1917 18.4258 10.7734C18.4258 6.35516 14.8441 2.77344 10.4258 2.77344Z"
          fill={color}
        />
      </svg>
    </>
  )
}