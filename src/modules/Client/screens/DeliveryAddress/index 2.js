import React from 'react'
import { Screen } from '~/components/molecules/Screen'
import { Box } from '~/components/atoms/Box'

import { inputs, validationSchema, initialValues } from './settings'

export const DeliveryAddress = ({ navigation }) => {
  const listHeader = () => {
    return <Box w="100%" align="center" mt={16} mb={16} />
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
        formButton: {
          onPress: () => navigation.navigate('ShoppingCart'),
          text: 'Confirmar endereço',
        },
      }}
      listHeader={listHeader}
    />
  )
}
