import React, { useState } from 'react'
import { Screen } from '~/components/molecules/Screen'
import { FoodOptionCard } from '~/components/molecules/Cards/FoodOption'
import { Button } from '~/components/atoms/Button'

import { foodList } from './settings'

export const OrderItems = ({ navigation }) => {
  const footer = () => {
    return (
      <Screen 
      ml={20}
        form={{
          formButton: {
            onPress: () => navigation.navigate('DeliveryAddress'),
            text: 'Confirmar produtos',
          },
        }}

        //listFooter={footer}
      />
    )
  }
  return (
    <Screen
      header={{
        title: 'Itens escolhidos',
      }}
      list={{
        data: foodList,
        renderItem: item => <FoodOptionCard mt={8} {...item} />,
      }}
      listFooter={footer}
    />
  )
}
