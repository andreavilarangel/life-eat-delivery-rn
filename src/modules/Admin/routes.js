import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from './screens/Login'

const Stack = createNativeStackNavigator()

export const AdminNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    {/* // SCREENS */}
    <Stack.Group>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Group>
    {/* MODALS */}
    {/* <Stack.Group screenOptions={{ presentation: 'containedTransparentModal' }}>
      <Stack.Screen name="ConfirmationModal" component={ConfirmationModal} />
    </Stack.Group> */}
  </Stack.Navigator>
)
