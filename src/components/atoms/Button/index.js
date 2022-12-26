import React from 'react'
import { Icon } from '../Icon'
import { ButtonContainer, BaseText, Loader } from './styles'

export const Button = ({
  children,
  customText,
  variant,
  disabled,
  loading,
  fontSize,
  iconProps,
  ...props
}) => {
  return (
    <ButtonContainer {...props} disabled={disabled} variant={variant}>
      {!!iconProps && <Icon {...iconProps} style={{ ...iconProps.style }} />}
      {loading ? (
        <Loader />
      ) : (
        <BaseText
          fontSize={fontSize}
          disabled={loading || disabled}
          variant={variant}>
          {children}
        </BaseText>
      )}
    </ButtonContainer>
  )
}
