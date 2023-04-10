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
      width: 100,
      height: 100,
    }
  }
  if (size === 'medium') {
    return {
      width: 120,
      height: 120,
    }
  }
  if (size === 'large') {
    return {
      width: 150,
      height: 150,
    }
  }
  return {
    width: 170,
    height: 170,
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
