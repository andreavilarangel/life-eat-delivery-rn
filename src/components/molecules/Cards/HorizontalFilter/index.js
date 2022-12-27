import React from 'react'
import { Text } from '~/components/atoms/Text'
import { Touchable } from '~/components/atoms/Touchable'

export const HorizontalFilterCard = ({ selected, text, ...props }) => {
  return (
    <Touchable
      {...props}
      ph={12}
      pv={4}
      br={24}
      bg={selected ? 'primary' : 'secondary'}
      bw={1}
      borderColor="primary">
      <Text.CardText color={selected ? 'secondary' : 'primary'}>
        {text}
      </Text.CardText>
    </Touchable>
  )
}
