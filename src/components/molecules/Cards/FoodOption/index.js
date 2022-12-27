import React from 'react'
import { Text } from '~/components/atoms/Text'
import { Box } from '~/components/atoms/Box'
import { FoodImage } from './styles'

export const FoodOptionCard = ({ selected, title, description, ...props }) => {
  return (
    <Box
      {...props}
      baseWidth
      br={8}
      p={16}
      bw={1}
      borderColor="primary"
      flexDir="row">
      <FoodImage src={props?.image_url} />
      <Box ml={12} w={220}>
        <Text.CardText font="bold">{title}</Text.CardText>
        <Text.SubText>{description}</Text.SubText>
      </Box>
    </Box>
  )
}
