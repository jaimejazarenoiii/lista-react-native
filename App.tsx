import React from 'react'
import { SafeAreaView, StatusBar, } from 'react-native'
import { Provider } from 'react-redux'
import { ShopList } from './src/containers'
import { store } from './src/redux'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" hidden />
      <SafeAreaView>
        <ShopList/>
      </SafeAreaView>
    </Provider>
  )
}

export default App
