import React from 'react'
import { Screen } from '~/components/molecules/Screen'
import { Text } from '~/components/atoms/Text'
import { Box } from '~/components/atoms/Box'

import { inputs, validationSchema, initialValues } from './settings'

export const ForgotPasswordPhone = ({ navigation }) => {
  const listHeader = () => {
    return (
      <Box w="100%" align="center" mt={16} mb={16}>
        <Text.SubText w="100%">
          {
            'Insira seu telefone cadastrado e enviaremos\numa chave de acesso para você voltar a\nacessar a sua conta'
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
          onPress: () => navigation.navigate('ForgotPasswordEmail'),
          text: 'Continuar',
        },
      }}
      listHeader={listHeader}
    />
  )
}
