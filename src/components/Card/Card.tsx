import { Fragment } from 'react'

import { useStyleConfig } from '@chakra-ui/react'
import { Box, Divider } from '@chakra-ui/layout'

import useStyles from './Card.styles'
import { CardProps } from './Card.types'

export const Card = ({ children, ...props }: CardProps) => {
  const {
    title,
    width,
    height,
    variant,
    withDivider,
    titleFontSize,
    padding,
    borderRadius,
    titleLineHeight,
  } = props
  const styles = useStyles()
  const baseStyles = useStyleConfig('Card', { variant })
  return (
    <Fragment>
      <Box
        {...props}
        borderRadius={borderRadius}
        minWidth={width}
        minHeight={height}
        __css={baseStyles}
        position="relative"
        padding={padding}
      >
        <Box
          __css={styles.cardHeading}
          fontSize={titleFontSize}
          textAlign="left"
          lineHeight={titleLineHeight}
        >
          {title}
        </Box>
        {withDivider && (
          <Divider position="absolute" top="63px" left="0px" width="100%" />
        )}
        <Box __css={styles.cardContent}>{children}</Box>
      </Box>
    </Fragment>
  )
}

Card.defaultProps = {
  variant: 'default',
  withDivider: false,
}
