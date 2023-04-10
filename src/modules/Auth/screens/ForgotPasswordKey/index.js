import React from 'react'
import { Screen } from '~/components/molecules/Screen'
import { Text } from '~/components/atoms/Text'
import { Box } from '~/components/atoms/Box'

import { inputs, validationSchema, initialValues } from './settings'

export const ForgotPasswordKey = () => {
  const listHeader = () => {
    return (
      <Box w="100%" align="center" mb={16}>
        <Text.SubText w="100%">
          {
            'Insira a chave de acesso enviada no seu e-mail\ne a digite sua nova senha.'
          }
        </Text.SubText>
      </Box>
    )
  }
  return (
    <Screen
      header={{
        onBack: true,
        title: 'Esqueci minha senha',
      }}
      form={{
        data: inputs,
        validationSchema,
        initialValues,
        formButton: {
          onPress: null,
          text: 'Continuar',
        },
      }}
      listHeader={listHeader}
    />
  )
}