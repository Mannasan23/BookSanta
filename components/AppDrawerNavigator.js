import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSlideBar';
import SettingScreen from '../screens/SettingScreen';
import MyDonations from '../screens/MyDonationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MyReceivedBooksScreen from '../screens/MyReceivedBooksScreen';

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
  MyReceivedBooks :{
    screen: MyReceivedBooksScreen
  },
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })