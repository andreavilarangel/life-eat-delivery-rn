import styled from 'styled-components'
import {
  colorProps,
  colorPropsTypes,
  flexProps,
  flexPropsTypes,
  marginProps,
  marginPropsTypes,
  paddingProps,
  paddingPropsTypes,
  sizeProps,
  sizePropsTypes,
  borderProps,
  borderPropsTypes,
} from '~/styles/styled-system'
import { Logo as logo } from '~/assets/images/brand'

const getSize = size => {
  if (size === 'small') {
    return {
      width: 120,
      height: 60,
    }
  }
  if (size === 'medium') {
    return {
      width: 190,
      height: 38,
    }
  }
  if (size === 'large') {
    return {
      width: 120,
      height: 60,
    }
  }
  return {
    width: 190,
    height: 38,
  }
}

export const Logo = styled.Image.attrs(({ src, resizeMode }) => ({
  source: src || logo,
  resizeMode: resizeMode || 'contain',
}))`
  align-self: center;
  ${sizeProps}
  ${flexProps}
  ${colorProps}
  ${paddingProps}
  ${marginProps}
  ${borderProps}
  width: ${({ theme, size }) => theme.px(getSize(size).width)}px;
  height: ${({ theme, size }) => theme.px(getSize(size).height)}px;
`
Logo.propTypes = {
  ...sizePropsTypes,
  ...flexPropsTypes,
  ...colorPropsTypes,
  ...paddingPropsTypes,
  ...marginPropsTypes,
  ...borderPropsTypes,
}
