import { Box } from '@chakra-ui/layout'
import { ICopyProps } from './ICopy.type'

export const ICopy = (props: ICopyProps) => {
  const { fillColor, ...rest } = props
  return (
    <Box {...rest}>
      <svg
        width="13"
        height="14"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.73125 0.5625C4.8476 0.5625 4.13125 1.27687 4.13125 2.1581V8.54049C4.13125 9.42171 4.8476 10.1361 5.73125 10.1361H10.5313C11.4149 10.1361 12.1313 9.42171 12.1313 8.54049V4.08415C12.1313 3.66098 11.9627 3.25513 11.6626 2.9559L9.73125 1.02984C9.43119 0.730607 9.02423 0.5625 8.59988 0.5625H5.73125Z"
          fill={fillColor ? fillColor : '#127E74'}
        />
        <path
          d="M0.931252 5.34929C0.931252 4.46807 1.6476 3.75369 2.53125 3.75369V11.7317H8.93125C8.93125 12.6129 8.21491 13.3273 7.33125 13.3273H2.53125C1.6476 13.3273 0.931252 12.6129 0.931252 11.7317V5.34929Z"
          fill={fillColor ? fillColor : '#127E74'}
        />
      </svg>
    </Box>
  )
}
