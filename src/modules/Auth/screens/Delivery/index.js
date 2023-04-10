import React from 'react'
import { Screen } from '~/components/molecules/Screen'
import { Text } from '~/components/atoms/Text'
import { Box } from '~/components/atoms/Box'

import { inputs, validationSchema, initialValues } from './settings'

export const Delivery = ({ navigation }) => {
  const listHeader = () => {
    return (
      <Box w="100%" align="center" mb={16}>
        <Text.SubText w="100%">
          {
            'Informe o endereço onde você quer que\na gente te entregue as marmitas:'
          }
        </Text.SubText>
      </Box>
    )
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
          onPress: () => navigation.navigate('ForgotPasswordPhone'),
          text: 'Salvar',
        },
      }}
      listHeader={listHeader}
    />
  )
}
