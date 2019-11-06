import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import StartScreen from '../screens/StartScreen';
import SignInScreen from '../auth/SignInScreen';
import SignUpScreen from '../auth/SignUpScreen';
import ForgetPasswordScreen from '../auth/ForgotPasswordScreen';

const Auth = createStackNavigator(
  {
    Start: StartScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    ForgotPassword: ForgetPasswordScreen,
  }
)

export default createAppContainer(
  createSwitchNavigator({
    Auth,
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
  })
);
