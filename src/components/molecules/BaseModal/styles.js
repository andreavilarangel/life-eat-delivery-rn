import styled from 'styled-components/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Box } from '~/components/atoms/Box'
import LinearGradient from 'react-native-linear-gradient'

export const BackgroundModal = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkTransparent[5]};
`
export const ContainerModal = styled(Box).attrs({
  align: 'flex-end',
  justify: 'flex-end',
  topLeftRadius: 24,
  topRightRadius: 24,
})`
  height: 93%;
  margin-top: ${({ theme, h }) => theme.hp(h ? 100 - h : 7)}px;
  background-color: ${({ theme }) => theme.colors.background};
`

export const ModalContentContainer = styled(Box).attrs(
  ({ centered, h, w }) => ({
    align: 'flex-start',
    justify: 'flex-start',
    h: h || '100%',
    w: w || '100%',
    bg: 'bgComponent',
    p: 30,
    pt: 24,
    topLeftRadius: 20,
    topRightRadius: 20,
  }),
)``

export const ModalHeader = styled(Box).attrs({
  flexDir: 'row',
  w: '100%',
  justify: 'space-between',
  align: 'center',
  pb: 24,
  pl: 20,
  pr: 20,
  pt: 24,
})``

export const KeyboardScroll = styled(KeyboardAwareScrollView).attrs(
  ({ theme, ...props }) => ({
    enableOnAndroid: true,
    extraHeight: theme.hp(15),
    extraScrollHeight: theme.hp(15),
    resetScrollToCoords: { x: 0, y: 0 },
    showsVerticalScrollIndicator: false,
    enableScroll: true,
    showsHorizontalScrollIndicator: false,
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      paddingHorizontal: theme.px(20),
      paddingBottom: theme.px(130),
      alignItems: props?.align || 'flex-start',
      justifyContent: props?.justify || 'flex-start',
    },
  }),
)`
  width: ${({ theme }) => theme.wp(100)}px;
`

export const BackgroundGradient = styled(LinearGradient).attrs(({ theme }) => ({
  colors: ['transparent', theme.colors.darkTransparent[8]],
  locations: [0, 1],
  width: theme.wp(100),
  height: theme.px(80),
  paddingHorizontal: theme.px(20),
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  bottom: 0;
`

export const BackgroundImg = styled.Image.attrs({})`
  width: ${({ theme }) => theme.px(375)}px;
  height: 100%;
  flex: 1;
  position: absolute;
  border-radius: ${({ theme }) => theme.px(24)}px;
`
