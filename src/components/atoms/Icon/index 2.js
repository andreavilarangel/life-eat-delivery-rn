import React from 'react'
import { withTheme } from 'styled-components'
import { Box } from '../Box'
import { Touchable } from '../Touchable'
import { theme } from '~/styles'
import * as icons from '~/assets/images/icons'

const IconContainer = ({ onPress, children, disabled, ...props }) => {
  if (onPress) {
    return (
      <Touchable onPress={onPress} disabled={disabled} {...props}>
        {children}
      </Touchable>
    )
  }

  return <Box {...props}>{children}</Box>
}

export const Icon = withTheme(
  ({
    name,
    onPress,
    size,
    color,
    noPadding,
    style,
    disabled,
    withBackground,
    ...props
  }) => {
    const IconSVG = icons[name?.toUpperCase()]
    return (
      <IconContainer onPress={onPress} disabled={disabled} {...props}>
        {IconSVG && (
          <IconSVG
            resizeMode="contain"
            fill={theme[color || 'primary']}
            stroke={theme[color || 'primary']}
            height={theme.px(size || 20)}
            width={theme.px(size || 20)}
            style={style}
            {...props}
          />
        )}
      </IconContainer>
    )
  },
)
