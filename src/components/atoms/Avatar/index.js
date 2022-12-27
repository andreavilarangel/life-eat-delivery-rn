import React from 'react'
import { Container, AvatarImage, Label } from './styles'
import defaultImg from '~/assets/images/backgrounds/user_default_img.png'

export const Avatar = ({
  size,
  source,
  selectable,
  onPress,
  selected,
  label,
  ...props
}) => {
  return (
    <Container {...props} onPress={onPress} size={size} disabled={!onPress}>
      <AvatarImage
        size={size}
        mb={!!label}
        source={source ? { uri: source } : defaultImg}
        resizeMode="cover"
        selectable={selectable}
        selected={selected}
        {...props}
      />
      {label && (
        <Label align="center" numberOfLines={2} size={size}>
          {label}
        </Label>
      )}
    </Container>
  )
}
