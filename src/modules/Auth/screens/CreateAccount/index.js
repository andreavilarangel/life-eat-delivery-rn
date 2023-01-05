import React from 'react'
import { Text } from '~/components/atoms/Text'
import { Box } from '~/components/atoms/Box'

import { inputs, validationSchema, initialValues } from './settings'

import { Screen } from '~/components/molecules/Screen'
import { Avatar } from '~/components/atoms/Avatar'

export const CreateAccount = ({ navigation }) => {
  const listHeader = () => {
    return (
      <Box w="100%" align="center" mt={20}>
        <Text.SubText w="100%">
          {'Seja bem-vindo ao app da Life Eat!\nInforme seus dados abaixo:'}
        </Text.SubText>
        <Avatar size="bigger" mt={20} mb={20} />
      </Box>
    )
  }

  return (
    <Screen
      header={{
        onBack: true,
        title: 'Cadastro',
      }}
      form={{
        data: inputs,
        validationSchema,
        initialValues,
        formButton: {
          onPress: null,
          text: 'Cadastrar',
        },
      }}
      listHeader={listHeader}
    />
  )
}
