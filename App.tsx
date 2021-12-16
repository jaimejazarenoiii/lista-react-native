import React from 'react'
import { StatusBar, } from 'react-native'
import { Provider } from 'react-redux'
import { ShopList } from './src/containers'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { store } from './src/redux'
import { RootStackParamList } from './src/enums'
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator<RootStackParamList>()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="ShopList"
              component={ShopList}
              options={({ navigation, route }) => ({ headerLargeTitle: true,
                headerTitle: "Shopping Sessions"
                })} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
