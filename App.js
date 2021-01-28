/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useEffect, useState } from 'react';

import ShoppingList from "./src/Pages/ShoppingList";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './reducer'

import { AsyncStorage, StyleSheet, View } from 'react-native';
import Cart from './src/Pages/Cart';
import Details from './src/Pages/Details';
import Camera from './src/Pages/Camera';
import Login from './src/Pages/Login';

const Stack = createStackNavigator();

const store = createStore(
  reducer,
)


const App = () => {
  const [initialRouteName,setInitialRouteName]=useState('')

  AsyncStorage.getItem('User')
    .then(result => {
      if(result){
        setInitialRouteName('Home')
      } else {
        setInitialRouteName('Login')
      }
    })
    .catch(() => {
      setInitialRouteName('Login')
    })

    if(!initialRouteName){
      return <View>

      </View>
    }

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
         
          
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRouteName} >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={ShoppingList} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Camera" component={Camera} />
          </Stack.Navigator> 
         
        </NavigationContainer>
      </Provider>
    </>
  );
};
export default App;
