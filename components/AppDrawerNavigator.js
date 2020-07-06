import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSlideBar';
import SettingScreen from '../screens/SettingScreen';
import MyDonations from '../screens/MyDonationScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
  },
  MyDonations: {
    screen: MyDonations
  },
  Settings: {
    screen: SettingScreen
  }, 
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })