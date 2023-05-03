import React from 'react'
import { Text } from '~/components/atoms/Text'
import { Touchable } from '~/components/atoms/Touchable'

export const HorizontalFilterCalendarCard = ({
  selected,
  day,
  week,
  ...props
}) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
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
      <Text.ModalTitle
        mb={6}
        font="bold"
        color={selected ? 'secondary' : 'primary'}>
        {day}
      </Text.ModalTitle>
      <Text.SubText color={selected ? 'secondary' : 'primary'}>
        {capitalizeFirstLetter(week)}
      </Text.SubText>
    </Touchable>
  )
}
