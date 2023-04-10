import React from 'react'
import { Text } from '~/components/atoms/Text'
import { Box } from '~/components/atoms/Box'
import { SelectedContainer } from './styles'

export const SelectedFood = ({ title, quantity, value, ...props }) => {
  return (
    <SelectedContainer>
      <Box align="center" justify="center" flexDirection="row">
        <Box
          mr={10}
          mt={6}
          w={20}
          h={20}
          bg="#E1D3C5"
          align="center"
          justify="center"
          br={4}>
          <Text.SubText>{quantity}</Text.SubText>
        </Box>
        <Text.SubText mt={8}>{title}</Text.SubText>
      </Box>
    </SelectedContainer>
  )
}
