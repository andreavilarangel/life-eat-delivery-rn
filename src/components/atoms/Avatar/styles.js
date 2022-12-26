import styled from 'styled-components/native'
import FastImage from 'react-native-fast-image'
import { Touchable } from '../Touchable'
import { Text } from '../Text'

export const getSizeMetrics = size => {
  if (size === 'bigger') {
    return {
      size: 125,
      padding: 20,
      text: 16,
    }
  }

  if (size === 'big') {
    return {
      size: 108,
      padding: 16,
      text: 14,
    }
  }

  if (size === 'profile') {
    return {
      size: 96,
      padding: 12,
      text: 13,
    }
  }

  if (size === 'small') {
    return {
      size: 64,
      padding: 8,
      text: 12,
    }
  }

  if (size === 'smaller') {
    return {
      size: 48,
      padding: 6,
      text: 11,
    }
  }

  if (size === 'historic') {
    return {
      size: 40,
      padding: 5,
      text: 11,
    }
  }

  if (size === 'mini') {
    return {
      size: 32,
      padding: 4,
      text: 10,
    }
  }

  return {
    size: 60,
    padding: 7,
    text: 9,
  }
}

export const Container = styled(Touchable).attrs({
  align: 'center',
  justify: 'center',
})`
  width: ${({ size, theme, fullWidth }) =>
    fullWidth ? '100% ' : `${theme.px(getSizeMetrics(size).size)}px`};
`

export const AvatarImage = styled(FastImage)`
  width: ${({ size, theme }) => theme.px(getSizeMetrics(size).size)}px;
  height: ${({ size, theme }) => theme.px(getSizeMetrics(size).size)}px;
  margin-bottom: ${({ mb, size, theme }) =>
    mb ? theme.px(getSizeMetrics(size).padding) : 0}px;
  border-radius: ${({ theme }) => theme.px(8)}px;
  opacity: ${({ selectable, selected }) => (!selectable || selected ? 1 : 0.3)};
  border-width: ${({ selected }) => (selected ? 1 : 0)}px;
  border-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.transparent};
`

export const LoadingBackground = styled.View`
  width: ${({ size, theme }) => theme.px(getSizeMetrics(size).size)}px;
  height: ${({ size, theme }) => theme.px(getSizeMetrics(size).size)}px;
  border-radius: ${({ theme }) => theme.px(8)}px;
  border-width: ${({ selected }) => (selected ? 2 : 0)}px;
  border-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.transparent};
  background-color: ${({ theme }) => theme.colors.darkTransparent[4]};
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
`
export const Label = styled(Text.CardText)`
  font-size: ${({ size, theme }) => theme.px(getSizeMetrics(size).text)}px;
`
