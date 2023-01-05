import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from './screens/Login'
import { CreateAccount } from './screens/CreateAccount'
import { Delivery } from './screens/Delivery'
import { ForgotPasswordPhone } from './screens/ForgotPasswordPhone'
import { ForgotPasswordEmail } from './screens/ForgotPasswordEmail'
import { ForgotPasswordKey } from './screens/ForgotPasswordKey'
import { SplashScreen } from './screens'

const Stack = createNativeStackNavigator()

export const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    {/* // SCREENS */}
    <Stack.Group>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="ForgotPasswordPhone"
        component={ForgotPasswordPhone}
      />
      <Stack.Screen
        name="ForgotPasswordEmail"
        component={ForgotPasswordEmail}
      />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="ForgotPasswordKey" component={ForgotPasswordKey} />
      <Stack.Screen name="Delivery" component={Delivery} />
    </Stack.Group>
    {/* MODALS */}
    <Stack.Group screenOptions={{ presentation: 'containedTransparentModal' }}>
      {/* <Stack.Screen name="ConfirmationModal" component={ConfirmationModal} /> */}
    </Stack.Group>
  </Stack.Navigator>
)
