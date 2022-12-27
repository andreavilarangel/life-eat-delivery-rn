import styled from 'styled-components/native'
export const FoodImage = styled.Image.attrs(({ src, resizeMode }) => ({
  source: src,
  resizeMode: resizeMode || 'contain',
}))`
  align-self: center;
  width: ${({ theme }) => theme.px(64)}px;
  height: ${({ theme }) => theme.px(64)}px;
  border-radius: ${({ theme }) => theme.px(8)}px;
`
