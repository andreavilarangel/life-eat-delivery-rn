import React from 'react'
import { Text } from '~/components/atoms/Text'
import { Touchable } from '~/components/atoms/Touchable'

export const HorizontalFilterCalendarCard = ({
  selected,
  day,
  week,
  ...props
}) => {
  return (
    <Touchable
      {...props}
      w={64}
      h={84}
      mr={16}
      br={8}
      bg={selected ? 'primary' : 'secondary'}
      bw={1}
      justify="center"
      align="center"
      borderColor="primary">
      <Text.CardText
        mb={6}
        font="bold"
        color={selected ? 'secondary' : 'primary'}>
        {day}
      </Text.CardText>
      <Text.SubText color={selected ? 'secondary' : 'primary'}>
        {week}
      </Text.SubText>
    </Touchable>
  )
}
