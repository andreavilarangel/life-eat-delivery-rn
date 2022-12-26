import React from 'react'

import { Logo } from '~/components/atoms/Logo'
import { Text } from '~/components/atoms/Text'
import { Screen } from '~/components/molecules/Screen'
import { inputs, validationSchema, initialValues } from './settings'

import LoginBG from '~/assets/images/backgrounds'

export const Login = ({ navigation }) => {
  const header = () => {
    return (
      <>
        <Logo mt={20} />
        <Text.ScreenTitle mt={100}>Login</Text.ScreenTitle>
      </>
    )
  }

  const footer = () => {
    return (
      <>
        <Text.Link
          onPress={() => navigation.navigate('ForgotPassword')}
          mt={24}>
          teste
        </Text.Link>
        <Text.Link
          mt={12}
          primaryText={'login.register'}
          onPress={() => navigation.navigate('CreateAccount')}>
          teste
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
