import React, { useState } from 'react'
import { Text } from '~/components/atoms/Text'
import { Box } from '~/components/atoms/Box'

import { Screen } from '~/components/molecules/Screen'
import { Touchable } from '~/components/atoms/Touchable'
import { RequestsCard } from '~/components/molecules/Cards/Requests'
import { finishedListFood, awaitingListFood } from './settings'

export const OrderHistory = ({}) => {
  const [selected, setSelected] = useState(false)
  const outOfScrollUp = () => {
    return (
      <Box h={54} justify="space-between" w="100%" flexDir="row">
        <Touchable
          w="50%"
          align="center"
          justify="center"
          onPress={() => setSelected('awaiting')}
          bbw={2}
          borderColor={selected === 'awaiting' ? 'primary' : 'grey'}>
          <Text.SectionTitle>Aguardando</Text.SectionTitle>
        </Touchable>

        <Touchable
          align="center"
          justify="center"
          w="50%"
          bbw={2}
          borderColor={selected === 'finished' ? 'primary' : 'grey'}
          onPress={() => setSelected('finished')}>
          <Text.SectionTitle>Finalizando</Text.SectionTitle>
        </Touchable>
      </Box>
    )
  }
  return (
    <Screen
      header={{
        title: 'Histórico de pedidos',
      }}
      outOfScrollUp={outOfScrollUp}
      list={{
        data: selected === 'finished' ? finishedListFood : awaitingListFood,
        renderItem: item => <RequestsCard mt={16} key={item.id} {...item} />,
      }}
    />
  )
}