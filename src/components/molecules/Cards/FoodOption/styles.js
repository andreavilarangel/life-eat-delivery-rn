import styled from 'styled-components/native'
import { Logo as logo } from '~/assets/images/brand'

export const FoodImage = styled.Image.attrs(({ img, resizeMode }) => ({
  source: img || logo,
  resizeMode: resizeMode || 'contain',
}))`
  align-self: center;
  width: ${({ theme }) => theme.px(64)}px;
  height: ${({ theme }) => theme.px(64)}px;
  border-radius: ${({ theme }) => theme.px(8)}px;
`
