import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import TrendingScreen from '../screens/TrendingScreen';
import TerritoryScreen from '../screens/TerritoryScreen';
import UserScreen from '../screens/UserScreen';
import { Ionicons } from '@expo/vector-icons';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const Home = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

Home.path = '';

const Trending = createStackNavigator(
  {
    Trending: TrendingScreen,
  },
  config
);

Trending.path = '';

const Territory = createStackNavigator(
  {
    Territory: TerritoryScreen,
  },
  config
);

Territory.path = '';

const User = createStackNavigator(
  {
    User: UserScreen,
  },
  config
);

User.path = '';

const tabNavigator = createBottomTabNavigator({
  Home,
  Trending,
  Territory,
  User,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state
      let IconComponent = Ionicons
      let iconName
      if ( routeName === 'Home') {
        iconName = Platform.OS === 'ios' ? 'ios-home' : 'md-home'
      } else if ( routeName === 'Trending') {
        iconName = Platform.OS === 'ios' ? 'ios-flame' : 'md-flame'
      } else if ( routeName === 'Territory') {
        iconName = Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'
      } else if ( routeName === 'User') {
        iconName = Platform.OS === 'ios' ? 'ios-person' : 'md-person'
      }

      return <IconComponent size = {25} name = { iconName } color = { tintColor } />
    }
  }),
  tabBarOptions: {
    activeTintColor: '#f1ad70',
    inactiveTintColor: '#aaa',
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold'
    }
  }
});

tabNavigator.path = '';

export default tabNavigator;
