import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from './screens/Home'
import { OrderDetails } from './screens/OrderDetails'
import { Products } from './screens'
import { OrderHistory } from './screens'
import { AddProduct } from './screens'

const Stack = createNativeStackNavigator()

export const AdminNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    {/* // SCREENS */}
    <Stack.Group>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="OrderHistory" component={OrderHistory} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Group>
    {/* MODALS */}
    {/* <Stack.Group screenOptions={{ presentation: 'containedTransparentModal' }}>
      <Stack.Screen name="ConfirmationModal" component={ConfirmationModal} />
    </Stack.Group> */}
  </Stack.Navigator>
)
