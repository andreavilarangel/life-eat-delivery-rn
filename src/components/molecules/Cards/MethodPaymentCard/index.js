import React from 'react'
import { Text } from '~/components/atoms/Text'
import { Box } from '~/components/atoms/Box'
import { Icon } from '~/components/atoms/Icon'

export const MethodPaymentCard = ({ selected, title, icon, ...props }) => {
  return (
    <Box {...props} baseWidth br={8} p={8} bw={1} borderColor="primary">
      <Box w={335} h={56} justify="flex-start" align="center" flexDir="row">
        <Icon name="PIX" size={30} mr={10} />
        <Text.CardText>{title}</Text.CardText>
      </Box>
    </Box>
  )
}
