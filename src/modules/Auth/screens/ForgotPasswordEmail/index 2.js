import React from 'react'
import { Screen } from '~/components/molecules/Screen'
import { Text } from '~/components/atoms/Text'
import { Box } from '~/components/atoms/Box'

import { inputs, validationSchema, initialValues } from './settings'

export const ForgotPasswordEmail = ({ navigation }) => {
  const listHeader = () => {
    return (
      <Box w="100%" align="center" mt={16} mb={16}>
        <Text.SubText w="100%">
          {
            'Confirme seu e-mail abaixo. Enviaremos uma\n chave de acesso para você voltar a acessar a\nsua conta'
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
          onPress: () => navigation.navigate('ForgotPasswordKey'),
          text: 'Continuar',
        },
      }}
      listHeader={listHeader}
    />
  )
}
