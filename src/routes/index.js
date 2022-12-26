import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthNavigator } from '~/modules/Auth/routes'
import { ClientNavigator } from '~/modules/Client/routes'

export const Router = () => {
  const navigationContainer = 'auth'
  return (
    <NavigationContainer>
      {navigationContainer === 'auth' && <AuthNavigator />}
      {navigationContainer === 'admin' && <AdminNavigator />}
      {navigationContainer === 'client' && <ClientNavigator />}
    </NavigationContainer>
  )
}
