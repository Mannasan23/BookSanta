import React from 'react';
import LoginScreen from './screens/LoginScreen';
import {AppTabNavigator} from './components/AppTabNavigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default function App() {
  return (
   <AppContainer></AppContainer>
  );
}

const SwitchNavigator = createSwitchNavigator({
  LoginScreen: {screens: LoginScreen},
  BottomTab: {screens: AppTabNavigator}
})

const AppContainer = createAppContainer(SwitchNavigator)