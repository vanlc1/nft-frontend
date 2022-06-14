export interface IContactProps {
  color?: string
}

export const IContact = ({ color = '#016B69' }: IContactProps) => {
  return (
    <>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.4126 13.8033C15.074 13.8033 16.4208 12.4549 16.4208 10.7916C16.4208 9.12838 15.074 7.78003 13.4126 7.78003C11.7511 7.78003 10.4043 9.12838 10.4043 10.7916C10.4043 12.4549 11.7511 13.8033 13.4126 13.8033Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.63477 10.4153H5.89097"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.63477 6.65063H5.89097"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.63477 14.1797H5.89097"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.63477 17.9443H5.89097"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.90039 16.0619C9.42579 15.3606 10.1071 14.7914 10.8903 14.3994C11.6735 14.0073 12.5371 13.8032 13.4128 13.8032C14.2885 13.8032 15.1521 14.0073 15.9353 14.3994C16.7185 14.7914 17.3998 15.3606 17.9252 16.0619"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.9336 20.5795V4.0156C20.9336 3.59978 20.5969 3.2627 20.1815 3.2627L6.64429 3.2627C6.22893 3.2627 5.89222 3.59978 5.89222 4.0156L5.89222 20.5795C5.89222 20.9953 6.22893 21.3324 6.64429 21.3324H20.1815C20.5969 21.3324 20.9336 20.9953 20.9336 20.5795Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  )
}
