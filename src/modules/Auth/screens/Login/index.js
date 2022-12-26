import React from 'react'

import { Logo } from '~/components/atoms/Logo'
import { Text } from '~/components/atoms/Text'
import { Screen } from '~/components/molecules/Screen'
import { inputs, validationSchema, initialValues } from './settings'
import { TitleSeparator } from './styles'
import { LoginBG } from '~/assets/images/backgrounds'

export const Login = ({ navigation }) => {
  const header = () => {
    return (
      <>
        <Logo size="large" />
        <Text.BigTitle mt={8} color="white">
          LIFE EAT
        </Text.BigTitle>
        <Text.ScreenTitle color="white">DELIVERY</Text.ScreenTitle>
        <TitleSeparator />
      </>
    )
  }

  const footer = () => {
    return (
      <>
        <Text.Link
          onPress={() => navigation.navigate('ForgotPassword')}
          mt={16}>
          Não possui uma conta? Faça seu cadastro
        </Text.Link>
        <Text.Link mt={10} onPress={() => navigation.navigate('CreateAccount')}>
          Esqueci minha senha
        </Text.Link>
      </>
    )
  }

  return (
    <Screen
      bgImg={LoginBG}
      align="center"
      form={{
        data: inputs,
        validationSchema,
        initialValues,
        formButton: {
          onPress: () => {},
          text: 'Login',
        },
      }}
      listHeader={header}
      listFooter={footer}
    />
  )
}
