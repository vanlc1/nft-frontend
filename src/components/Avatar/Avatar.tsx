import { Box, Flex, BoxProps } from '@chakra-ui/layout'
import { Avatar as BaseAvatar } from '@chakra-ui/avatar'
import { useStyles } from './Avatar.styles'

export interface AvatarProps extends BoxProps {
  src?: string
  userName?: string
}

export const Avatar = (props: AvatarProps) => {
  const { src, userName, ...rest } = props
  const styles = useStyles()
  return (
    <Box __css={styles.wrap} {...rest}>
      <Flex __css={styles.wrapAvatar}>
        <BaseAvatar src={src} boxSize="60px" />
      </Flex>
      <Box __css={styles.userName}>{userName}</Box>
    </Box>
  )
}
