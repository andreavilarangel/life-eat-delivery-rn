import { Platform } from 'react-native'
import styled from 'styled-components'
import { TextInputMask } from 'react-native-masked-text'
import { Box } from '~/components/atoms/Box'
import * as S from '~/styles'

const handleGetSize = props => {
  let width = 100
  if (props?.secureText) {
    width = width - 9
  }
  if (props?.icon) {
    width = width - 9
  }
  if (props?.fullWidth) {
    width = 100
  }
  if (props?.inputType === 'box') {
    return {
      container_height: 56,
      input_width: `${width}%`,
      padding_horizontal: 16,
    }
  }

  if (props?.textArea) {
    return {
      container_height: 102,
      input_width: '100%',
      padding_horizontal: 0,
    }
  }

  return {
    container_height: 40,
    input_width: `${width}%`,
    padding_horizontal: 0,
  }
}

export const Container = styled(Box).attrs(({ focus, w, ...props }) => ({
  w: w,
  baseWidth: w ? false : true,
  br: props?.inputType === 'box' || props?.textArea ? 8 : 0,
  bg:
    props?.inputType === 'box' || props?.textArea ? 'component' : 'transparent',
  flexDir: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  h: handleGetSize(props).container_height,
  bw: focus && props?.inputType === 'box' ? 1 : 0,
  borderColor: focus ? 'primary' : 'border',
  bbw: props?.textArea ? 0 : 1,
  ph: handleGetSize(props).padding_horizontal,
  pv: props?.textArea && 6,
}))`
  margin: 0px;
`

const commomProps = props => ({
  placeholderTextColor: S.colors[props?.placeholderTextColor || 'grey'],
  fontFamily: S.fonts.medium,
  fontSize: S.metrics.px(props?.fontSize || 16),
  color: props?.editable ? 'white' : 'white',
  textAlignVertical: 'center',
  width: handleGetSize(props).input_width,
  height: '100%',
  underlineColorAndroid: 'transparent',
  borderColor: 'transparent',
  borderBottomColor: 'transparent',
  marginBottom: S.metrics.px(Platform.OS === 'android' ? -4 : 0),
})

export const InputText = styled.TextInput.attrs(props => ({
  ...commomProps(props),
}))``

export const MaskedInput = styled(TextInputMask).attrs(props => ({
  ...commomProps(props),
  includeRawValueInChangeText: true,
}))``

export const InputTextArea = styled.TextInput.attrs(({ theme, ...props }) => ({
  ...commomProps(props),
  multiline: true,
  padding: theme.px(16),
  fontSize: 14,
}))``
