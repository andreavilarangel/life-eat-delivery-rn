import styled from 'styled-components/native'
export const LocationImage = styled.Image.attrs(({ src, resizeMode }) => ({
  source: src,
  resizeMode: resizeMode || 'contain',
}))`
  align-self: center;
  width: ${({ theme }) => theme.px(50)}px;
  height: ${({ theme }) => theme.px(50)}px;
  border-radius: ${({ theme }) => theme.px(8)}px;
`
