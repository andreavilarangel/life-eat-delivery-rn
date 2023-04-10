import React from 'react'
import { Text } from '~/components/atoms/Text'
import { Box } from '~/components/atoms/Box'
import { PayContainer } from './styles'
import { Icon } from '~/components/atoms/Icon'

export const FormPayment = ({ selected, title, icon, ...props }) => {
  return (
    <Box align="center" mr={26}>
      <PayContainer {...props} mt={16} bg={selected ? 'primary' : 'white'}>
        <Icon name={icon} size={28} color={selected ? 'white' : 'primary'} />
      </PayContainer>
      <Text.SubText>{title}</Text.SubText>
    </Box>
  )
}
