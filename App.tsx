/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type React from 'react'

import { ImageBackground, StatusBar, useColorScheme } from 'react-native'

import Home from './src/screens/Home'

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'light'

  return (
    <ImageBackground
      resizeMode="cover"
      source={require('./src/assets/background.png')}
      style={{ flex: 1 }}
    >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        translucent
      />

      <Home />
    </ImageBackground>
  )
}

export default App
