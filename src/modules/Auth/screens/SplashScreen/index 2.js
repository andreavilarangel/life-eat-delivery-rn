import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { authStore } from '~/services/store'
import { Logo } from '~/components/atoms/Logo'

export const SplashScreen = ({ navigation }) => {
  const { setNavigation } = authStore()
  useEffect(() => {
    setNavigation(navigation)
    setTimeout(() => {
      navigation.navigate('Login')
    }, 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1B5F1B',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Logo size="large" />
    </View>
  )
}
