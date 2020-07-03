import React from 'react';
import LoginScreen from './screens/LoginScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';

export default function App() {
  return (
   <AppContainer></AppContainer>
  );
}

const SwitchNavigator = createSwitchNavigator({
  LoginScreen: {screen: LoginScreen},
  Drawer: {screen: AppDrawerNavigator}
})

const AppContainer = createAppContainer(SwitchNavigator)