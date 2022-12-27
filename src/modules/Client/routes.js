import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomBar } from '~/components/organisms/BottomBar'

import { Home } from './screens/Home'

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
        name="Financeiro"
        component={Home}
      />
      <Tab.Screen
        options={{ title: 'Barbearia' }}
        name="Barbearia"
        component={Home}
      />
      <Tab.Screen
        options={{ title: 'Minha Conta' }}
        name="Minha Conta"
        component={Home}
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
      </Stack.Group>
      {/* Modals */}
      <Stack.Group
        screenOptions={{ presentation: 'containedTransparentModal' }}>
        {/* <Stack.Screen name="ProductModal" component={SelectService} /> */}
      </Stack.Group>
    </Stack.Navigator>
  )
}
