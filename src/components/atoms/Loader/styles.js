import styled from 'styled-components/native'
import LottieAnimation from 'lottie-react-native'
import { Text as DefaultText } from '../Text'
import { Box } from '../Box'

const getSize = size => {
  switch (size) {
    case 'mini':
      return { size: 40, text: 10 }
    case 'small':
      return { size: 60, text: 12 }
    case 'medium':
      return { size: 120, text: 14 }
    case 'large':
      return { size: 180, text: 18 }
    default:
      return { size: 80, text: 12 }
  }
}

export const Container = styled(Box).attrs({
  align: 'center',
  justify: 'flex-start',
  w: 335,
})``
export const Text = styled(DefaultText).attrs(({ size }) => ({
  fontFamily: 'medium',
  fontSize: getSize(size).text,
}))``

export const Animation = styled(LottieAnimation)`
  width: ${({ theme, size }) => theme.px(getSize(size).size)}px;
  height: ${({ theme, size }) => theme.px(getSize(size).size)}px;
`
