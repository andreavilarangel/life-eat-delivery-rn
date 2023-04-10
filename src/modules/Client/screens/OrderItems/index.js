import React, { useState } from 'react'
import { Screen } from '~/components/molecules/Screen'
import { FoodOptionCard } from '~/components/molecules/Cards/FoodOption'

import { clientStore } from '~/services/store/client'

export const OrderItems = ({ navigation }) => {
  const { selectedList } = clientStore()

  return (
    <Screen
      header={{
        title: 'Itens escolhidos',
      }}
      finalButton={{
        btMb: 70,
        text: 'Confirmar produto',
        onPress: () => navigation.navigate('DeliveryAddress'),
      }}
      list={{
        data: selectedList,
        renderItem: item => <FoodOptionCard mb={12} {...item} item={item} />,
      }}
    />
  )
}
