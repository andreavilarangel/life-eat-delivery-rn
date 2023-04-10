import styled from 'styled-components/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Box } from '~/components/atoms/Box'
import { Touchable } from '~/components/atoms/Touchable'
import LinearGradient from 'react-native-linear-gradient'
import { theme } from '~/styles'

export const Container = styled(Box).attrs(props => ({
  fullWidth: true,
  bg: 'background',
  align: 'flex-start',
  justifyContent: 'flex-start',
}))`
  flex: 1;
  padding-top: ${theme.hp(5)}px;
`

export const KeyboardScroll = styled(KeyboardAwareScrollView).attrs(
  ({ ...props }) => ({
    enableOnAndroid: true,
    extraHeight: theme.hp(15),
    extraScrollHeight: theme.hp(15),
    resetScrollToCoords: { x: 0, y: 0 },
    showsVerticalScrollIndicator: false,
    enableScroll: true,
    showsHorizontalScrollIndicator: false,
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      paddingTop: theme.px(20),
      paddingHorizontal: theme.px(20),
      paddingBottom: theme.px(props?.finalButton ? 200 : 130),
      alignItems: props?.align || 'flex-start',
      justifyContent: props?.justify || 'flex-start',
    },
  }),
)`
  width: ${theme.wp(100)}px;
`

export const BackgroundGradient = styled(LinearGradient).attrs(({ btMb }) => ({
  colors: [theme.colors.darkTransparent[2], theme.colors.secondary],
  locations: [0, 0.2, 0, 0.2],
  width: theme.wp(100),
  height: theme.px(90),
  paddingHorizontal: theme.px(20),
  marginBottom: theme.px(btMb || 0),
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
`
export const BackgroundImg = styled.Image.attrs({})`
  width: ${theme.px(375)}px;
  height: ${({ h }) => theme.hp(h || 100)}px;
  flex: 1;
  position: absolute;
`

export const SmallButton = styled(Touchable).attrs({
  h: 35,
  br: 8,
  flexDir: 'row',
  p: 8,
  align: 'center',
  justify: 'center',
  bg: 'primary',
})``
