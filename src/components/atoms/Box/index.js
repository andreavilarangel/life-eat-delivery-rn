import styled from 'styled-components/native'
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

export const Box = styled.View`
  ${sizeProps}
  ${flexProps}
  ${colorProps}
  ${paddingProps}
  ${marginProps}
  ${borderProps}
`

Box.propTypes = {
  ...sizePropsTypes,
  ...flexPropsTypes,
  ...colorPropsTypes,
  ...paddingPropsTypes,
  ...marginPropsTypes,
  ...borderPropsTypes,
}
