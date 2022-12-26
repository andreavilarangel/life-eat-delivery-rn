import styled from 'styled-components/native'
import { Touchable } from '../Touchable'
import { Text } from '../Text'

const handleButtonVariant = props => {
  if (props?.disabled) {
    return {
      bg: 'darkGrey2',
      textColor: 'background',
      borderColor: 'border',
    }
  }

  if (!props?.variant) {
    return {
      bg: 'primary',
      textColor: 'secondary',
    }
  }

  const { variant } = props
  if (variant === 'dashed') {
    return {
      bg: 'transparent',
      textColor: 'white',
      borderColor: 'border',
    }
  }

  if (variant === 'default') {
    return {
      bg: 'primary',
      textColor: 'secondary',
    }
  }

  if (variant === 'secondary') {
    return {
      bg: 'white',
      textColor: 'primary',
    }
  }

  if (variant === 'danger') {
    return {
      bg: 'error',
      textColor: 'white',
    }
  }

  if (variant === 'delete') {
    return {
      bg: 'error',
      textColor: 'white',
    }
  }

  if (variant === 'outline') {
    return {
      bg: 'transparent',
      textColor: 'white',
      borderColor: 'border',
    }
  }
  if (variant === 'outlinePrimary') {
    return {
      bg: 'transparent',
      textColor: 'primary',
      borderColor: 'primary',
    }
  }
}

export const BaseText = styled(Text).attrs(props => ({
  color: handleButtonVariant(props).textColor,
  font: 'bold',
  fontSize: props?.fontSize || 16,
  align: 'center',
}))``

export const ButtonContainer = styled(Touchable).attrs(
  ({ w, h, bg, br, ...props }) => ({
    flexDir: 'row',
    align: 'center',
    justifyContent: 'center',
    w: w || 335,
    h: h || 56,
    br: br || 8,
    bg: bg || handleButtonVariant(props).bg,
    bw: 1,
    borderColor: handleButtonVariant(props).borderColor || 'transparent',
  }),
)``

export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.background,
}))``
