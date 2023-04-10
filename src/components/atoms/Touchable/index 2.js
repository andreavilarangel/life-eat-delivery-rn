import styled from 'styled-components/native'
import PropTypes from 'prop-types'
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

export const Touchable = styled.TouchableOpacity`
  ${sizeProps}
  ${flexProps}
  ${colorProps}
  ${paddingProps}
  ${marginProps}
  ${borderProps}
  overflow: hidden;
`

Touchable.propTypes = {
  onPress: PropTypes.func,
  ...sizePropsTypes,
  ...flexPropsTypes,
  ...colorPropsTypes,
  ...paddingPropsTypes,
  ...marginPropsTypes,
  ...borderPropsTypes,
}
