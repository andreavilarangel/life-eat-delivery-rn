// libs
import React, { useState } from 'react'
// components
import { Container, AvatarImage, LoadingBackground, Label } from './styles'

export const Avatar = ({
  size,
  source,
  selectable,
  onPress,
  selected,
  type,
  label,
  loading,
  changePhoto,
  ...props
}) => {
  const defaultImg = ''
  const [image, setImage] = useState(source ? { uri: source } : defaultImg)

  return (
    <Container {...props} onPress={onPress} size={size} disabled={!onPress}>
      <AvatarImage
        size={size}
        mb={!!label}
        source={image}
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
