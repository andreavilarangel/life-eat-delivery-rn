import React from 'react'

import { Screen } from '~/components/molecules/Screen'
import { foodList } from './settings'
import { FoodOptionCard } from '~/components/molecules/Cards/FoodOption'

export const Products = () => {
  return (
    <Screen
      header={{
        onBack: true,
        onAdd: true,
        title: 'Produtos',
      }}
      list={{
        data: foodList,
        renderItem: item => <FoodOptionCard mt={8} {...item} />,
      }}
    />
  )
}
