import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomBar } from '~/components/organisms/BottomBar'
import { Home } from './screens/Home'
import { OrderItems } from './screens'
import { DeliveryAddress } from './screens'
import { ShoppingCart } from './screens/ShoppingCart'
import { Profile } from './screens/Profile'
import { MyRequests } from './screens/MyRequests'

const OrderNavigator = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="OrderNavigator">
      <Stack.Group>
        <Stack.Screen name="OrderItems" component={OrderItems} />
        <Stack.Screen name="DeliveryAddress" component={DeliveryAddress} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export const HomeTabs = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => {},
      }}
      tabBar={props => <BottomBar {...props} type="client" />}>
      <Tab.Screen
        options={{
          title: 'Home',
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{ title: 'Financeiro' }}
        name="OrderNavigator"
        component={OrderNavigator}
      />
      <Tab.Screen
        options={{ title: 'Barbearia' }}
        name="MyRequests"
        component={MyRequests}
      />
      <Tab.Screen
        options={{ title: 'Minha Conta' }}
        name="Minha Conta"
        component={Profile}
      />
    </Tab.Navigator>
  )
}

export const ClientNavigator = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group>
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Group>
      {/* Modals */}
      <Stack.Group
        screenOptions={{ presentation: 'containedTransparentModal' }}>
        {/* <Stack.Screen name="ProductModal" component={SelectService} /> */}
      </Stack.Group>
    </Stack.Navigator>
  )
}
