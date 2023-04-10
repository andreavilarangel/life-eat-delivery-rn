import styled from 'styled-components/native'

import {
  sizeProps,
  fontProps,
  colorProps,
  marginProps,
  paddingProps,
} from '~/styles/styled-system'

export const BaseText = styled.Text`
  ${sizeProps}
  ${fontProps}
  ${colorProps}
  ${marginProps}
  ${paddingProps}
  color: ${({ theme, color }) => theme.colors[color || 'primary']}
`
