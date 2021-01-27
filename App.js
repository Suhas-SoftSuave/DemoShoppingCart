/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

import ShoppingList from "./src/Pages/ShoppingList";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './reducer'

import { StyleSheet } from 'react-native';
import Cart from './src/Pages/Cart';
import Details from './src/Pages/Details';
import Camera from './src/Pages/Camera';
import Login from './src/Pages/Login';

const Stack = createStackNavigator();

const store = createStore(
  reducer,
)


const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
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
