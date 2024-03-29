import React from 'react'
import { Screen } from '~/components/molecules/Screen'

import { inputs, validationSchema, initialValues } from './settings'
import { clientStore } from '~/services/store/client'

export const DeliveryAddress = ({ navigation }) => {
  const { setAddress } = clientStore()

  // Dentro da sua função de formulário

  const handleFormSubmit = address => {
    setAddress(address)
    navigation.navigate('ShoppingCart')
  }

  return (
    <Screen
      header={{
        title: 'Endereço',
      }}
      form={{
        data: inputs,
        validationSchema,
        initialValues,
      }}
      finalButton={{
        btMb: 70,
        text: 'Confirmar endereço',
        bg: 'primary',
        onPress: p => handleFormSubmit(p),
      }}
    />
  )
}
