import React from 'react'
import { StatusBar, LogBox } from 'react-native'
import { ThemeProvider } from 'styled-components'
import FlashMessage from 'react-native-flash-message'
import { theme } from '~/styles'
import { Router } from '~/routes'

LogBox.ignoreAllLogs()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={theme.colors.transparent}
      />

      <Router />
      <FlashMessage position="top" duration={2500} />
    </ThemeProvider>
  )
}

export default App
