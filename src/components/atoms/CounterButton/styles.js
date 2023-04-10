import styled from 'styled-components/native'
import { Touchable } from '../Touchable'
import { Text } from '../Text'

export const ButtonCounterContainer = styled(Touchable).attrs(
  ({ w, h, bg, br, ...props }) => ({
    align: 'center',
    justifyContent: 'center',
    w: w || 25,
    h: h || 24,
    br: 6,
    bg: 'white',
  }),
)``

export const CardText = styled(Text).attrs(props => ({
  color: 'primary',
  fontSize: props?.fontSize || 16,
  align: 'center',
}))``
