import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/components/screens/WelcomeScreen';
import Tabs from './src/components/screens/Tabs';
import Details from './src/components/screens/Details';
import Cart from './src/components/screens/Cart';
import { Context } from './src/components/Context/Context';
import OrderPlaced from './src/components/screens/OrderPlaced';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Context>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='Cart' component={Cart} />
        <Stack.Screen name='OrderPlaced' component={OrderPlaced} />
      </Stack.Navigator>
    </NavigationContainer>
    </Context>
   
  )
}

export default App

const styles = StyleSheet.create({})