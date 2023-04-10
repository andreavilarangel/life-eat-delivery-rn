import React, { useEffect } from 'react'
import { authStore } from '~/services/store'
import { LoginBG } from '~/assets/images/backgrounds'
import { Screen } from '~/components/molecules/Screen'
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
    <Screen bgImg={LoginBG} align="center">
      <Logo size="large" mt={300} />
    </Screen>
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: '#1B5F1B',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   }}>
    //   <Logo size="large" />
    // </View>
  )
}
