import { Box } from '@chakra-ui/layout'
import { useRouter } from 'next/router'

import { IArrowBack } from 'components'
import { BackButtonProps } from './BackButton.types'
import useStyles from './BackButton.styles'

export const BackButton = (props: BackButtonProps) => {
  const { text, ...rest } = props
  const router = useRouter()
  const styles = useStyles()
  return (
    <Box
      __css={styles.backButtonContainer}
      {...rest}
      onClick={() => router.back()}
    >
      <IArrowBack />
      <Box __css={styles.backButton}>{text}</Box>
    </Box>
  )
}
