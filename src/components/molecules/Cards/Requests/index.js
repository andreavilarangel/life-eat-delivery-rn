import React, { useState } from 'react'
import { Text } from '~/components/atoms/Text'
import { Box } from '~/components/atoms/Box'
import { formatCurrency } from '~/utils'
import { Icon } from '~/components/atoms/Icon'
import { Touchable } from '~/components/atoms/Touchable'

export const RequestsCard = ({
  selected,
  title,
  quantity,
  order,
  date,
  items,
  border,
  ...props
}) => {
  const getTotal = () => {
    let total = 0
    items.map(item => (total = total + item.value * item.quantity))
    return total
  }

  return (
    <Touchable
      {...props}
      baseWidth
      br={8}
      p={16}
      bw={1}
      borderColor={border ? 'transparent' : 'primary'}>
      <Text.CardText font="bold" color="primary">
        Nº {order}
      </Text.CardText>
      {props?.status && (
        <Box flexDir="row" align="center">
          <Icon mr={8} color="orange" size={14} name="timer" />
          <Text.CardText font="bold" color="orange">
            {props?.status === 'awaiting'
              ? 'Aguardando confirmação'
              : 'Pedido confirmado'}
          </Text.CardText>
        </Box>
      )}
      <Box mt={6} align="center" justify="flex-start" flexDirection="row">
        <Box
          mr={10}
          w={20}
          h={20}
          bg="#E1D3C5"
          align="center"
          justify="center"
          br={4}>
          <Text.SubText>{items[0].quantity}</Text.SubText>
        </Box>
        <Text.SubText>{items[0].title}</Text.SubText>
      </Box>
      <Text.SubText font="bold">{`mais ${
        items.length - 1
      } itens`}</Text.SubText>
      <Text.SubText>Entrega realizada dia {date}</Text.SubText>
      <Text.SubText font="bold">
        Valor total: {formatCurrency(getTotal())}
      </Text.SubText>
    </Touchable>
  )
}
