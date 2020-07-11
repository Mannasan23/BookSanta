import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSlideBar';
import SettingScreen from '../screens/SettingScreen';
import MyDonations from '../screens/MyDonationScreen';
import NotificationScreen from '../screens/NotificationScreen';

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
  Notifications: {
    screen: NotificationScreen
  },
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })