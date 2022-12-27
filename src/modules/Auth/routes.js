import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from './screens/Login'

const Stack = createNativeStackNavigator()

export const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    {/* // SCREENS */}
    <Stack.Group>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
    </Stack.Group>
    {/* MODALS */}
    <Stack.Group screenOptions={{ presentation: 'containedTransparentModal' }}>
      {/* <Stack.Screen name="ConfirmationModal" component={ConfirmationModal} /> */}
    </Stack.Group>
  </Stack.Navigator>
)
