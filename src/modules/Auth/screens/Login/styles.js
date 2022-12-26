import styled from 'styled-components/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Box } from '~/components/atoms/Box'
import loginBg from '~/assets/images/whitelabel/bg_login.png'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: flex-start;
`

export const Background = styled.Image.attrs({
  source: loginBg,
})`
  width: ${({ theme }) => theme.px(375)}px;
  height: ${({ theme }) => theme.hp(100)}px;
  position: absolute;
`

export const KeyboardScroll = styled(KeyboardAwareScrollView).attrs(
  ({ theme }) => ({
    // horizontal: horizontal,
    enableOnAndroid: true,
    extraHeight: theme.hp(5),
    extraScrollHeight: theme.hp(5),
    showsVerticalScrollIndicator: false,
    showsHorizontalScrollIndicator: false,
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      // paddingBottom: theme.px(pb || 0),
      // paddingLeft: theme.px(pl || 0),
      // paddingRight: theme.px(pr || 0),
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  }),
)`
  padding: ${({ theme }) => theme.px(20)}px;
`

export const TitleSeparator = styled(Box).attrs({
  h: 2,
  w: 105,
  bg: 'primary',
  mt: 16,
  br: 3,
  mb: 24,
})``
