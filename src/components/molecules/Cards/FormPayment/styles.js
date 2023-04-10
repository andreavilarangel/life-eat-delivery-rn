import styled from 'styled-components/native'
import { Touchable } from '../../../atoms/Touchable'

export const PayContainer = styled(Touchable).attrs(
  ({ w, h, bg, br, ...props }) => ({
    flexDir: 'column',
    align: 'center',
    justifyContent: 'center',
    w: w || 64,
    h: h || 64,
    br: br || 8,
    bw: 1,
    borderColor: 'primary',
  }),
)``
