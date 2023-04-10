import styled from 'styled-components'
import { theme } from '~/styles'
import LinearGradient from 'react-native-linear-gradient'

export const BackgroundGradient = styled(LinearGradient).attrs(() => ({
  colors: [theme.colors.darkTransparent[2], theme.colors.secondary],
  locations: [0, 1],
  width: theme.wp(100),
  height: theme.px(170),
  paddingHorizontal: theme.px(20),
  marginBottom: theme.px(70),
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: ${theme.px(-20)}px;
  margin-top: ${theme.px(-20)}px;
`
export const BackgroundImg = styled.Image.attrs({
  opacity: 0.5,
})`
  width: ${theme.px(375)}px;
  height: ${theme.px(170)}px;
  position: absolute;
  top: 0;
`
