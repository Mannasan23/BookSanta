import React from 'react';
import LoginScreen from './screens/LoginScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';
import {AppTabNavigator} from './components/AppTabNavigator';

export default function App() {
  return (
   <AppContainer></AppContainer>
  );
}

const SwitchNavigator = createSwitchNavigator({
  LoginScreen: {screen: LoginScreen},
  Drawer: {screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator}
})

const AppContainer = createAppContainer(SwitchNavigator)