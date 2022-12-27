import styled from 'styled-components/native'
import { Box } from '~/components/atoms/Box'

export const BarContentContainer = styled(Box).attrs(({ theme }) => ({
  fullWidth: true,
  justify: 'space-between',
  h: 70,
  bg: 'white',
  pt: 10,
  pb: 16,
  pr: 10,
  pl: 10,
  btw: 1,
  borderColor: theme.grey,
}))`
  flex-direction: row;
  position: absolute;
  bottom: 0;
`
