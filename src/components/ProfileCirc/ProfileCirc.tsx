import React from 'react'

import { Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import useStyles from './ProfileCirc.styles'
import { ProfileCircProps } from './ProfileCirc.type'

export const ProfileCirc = (props: ProfileCircProps) => {
  const styles = useStyles()
  const { src, ...rest } = props

  return (
    <Box __css={styles.borderProfile} {...rest}>
      <Image src={src} alt="profileCirc" __css={styles.profileImg} />
    </Box>
  )
}
