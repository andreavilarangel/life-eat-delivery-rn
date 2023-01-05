import React from 'react'

import { Logo } from '~/components/atoms/Logo'
import { Text } from '~/components/atoms/Text'
import { Screen } from '~/components/molecules/Screen'
import { inputs, validationSchema, initialValues } from './settings'
import { TitleSeparator } from './styles'
import { LoginBG } from '~/assets/images/backgrounds'
import { authStore } from '~/services/store'

export const Login = ({ navigation }) => {
  const { setNavigationContainer } = authStore()

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
        <Text.Link onPress={() => navigation.navigate('CreateAccount')} mt={16}>
          Não possui uma conta? Faça seu cadastro
        </Text.Link>
        <Text.Link
          mt={10}
          onPress={() => navigation.navigate('ForgotPasswordPhone')}>
          Esqueci minha senha
        </Text.Link>
      </>
    )
  }

  const onLogin = () => {
    setNavigationContainer('client')
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
          onPress: onLogin,
          text: 'Login',
        },
      }}
      listHeader={header}
      listFooter={footer}
    />
  )
}
