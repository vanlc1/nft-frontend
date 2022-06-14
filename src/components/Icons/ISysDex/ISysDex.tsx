import { baseTheme } from 'themes'
import { ISysDexProps } from './ISysDex.type'

export const ISysDex = (props: ISysDexProps) => {
  const { isClicked } = props
  const mainFillColor = isClicked
    ? baseTheme.colors.green['50']
    : baseTheme.colors.inkGray['50']

  const secFillColor = isClicked
    ? baseTheme.colors.orange['40']
    : baseTheme.colors.white
  const thrdFillColor = isClicked
    ? baseTheme.colors.white
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
        <rect width="24" height="24" fill="none" />
        <path
          d="M10.4608 3.41421C11.2418 2.63317 12.5082 2.63317 13.2892 3.41421L20.9608 11.0858C21.7418 11.8668 21.7418 13.1332 20.9608 13.9142L13.2892 21.5858C12.5082 22.3668 11.2418 22.3668 10.4608 21.5858L2.78921 13.9142C2.00817 13.1332 2.00817 11.8668 2.78921 11.0858L10.4608 3.41421Z"
          fill={mainFillColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.3605 7.10443C12.7022 6.76272 13.2562 6.76272 13.5979 7.10443L16.3294 9.83593C16.5797 10.0862 16.6545 10.4625 16.5191 10.7895C16.3837 11.1165 16.0646 11.3296 15.7107 11.3296H8.06252C7.57927 11.3296 7.18752 10.9379 7.18752 10.4546C7.18752 9.9714 7.57927 9.57965 8.06252 9.57965H13.5983L12.3605 8.34186C12.0188 8.00015 12.0188 7.44613 12.3605 7.10443ZM7.25413 14.2106C7.38956 13.8837 7.70862 13.6705 8.06253 13.6705H15.7107C16.194 13.6705 16.5857 14.0622 16.5857 14.5455C16.5857 15.0287 16.194 15.4205 15.7107 15.4205H10.175L11.4127 16.6583C11.7545 17 11.7545 17.554 11.4127 17.8957C11.071 18.2374 10.517 18.2374 10.1753 17.8957L7.44381 15.1642C7.19356 14.914 7.1187 14.5376 7.25413 14.2106Z"
          fill={secFillColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.3827 14.5415C12.3827 14.0583 12.7744 13.6665 13.2577 13.6665L15.7137 13.6665C16.1969 13.6665 16.5887 14.0583 16.5887 14.5415C16.5887 15.0248 16.1969 15.4165 15.7137 15.4165H13.2577C12.7744 15.4165 12.3827 15.0248 12.3827 14.5415Z"
          fill={thrdFillColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.16211 10.4537C7.16211 9.97042 7.55386 9.57867 8.03711 9.57867L10.4966 9.57861C10.9798 9.57861 11.3716 9.97036 11.3716 10.4536C11.3716 10.9369 10.9798 11.3286 10.4966 11.3286L8.03711 11.3287C7.55386 11.3287 7.16211 10.9369 7.16211 10.4537Z"
          fill={thrdFillColor}
        />
      </svg>
    </>
  )
}
