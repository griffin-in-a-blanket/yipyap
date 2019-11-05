import React from 'react';
import { Text } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default function UserScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <Text> Cats are evil </Text>
}

UserScreen.navigationOptions = {
  title: 'app.json',
};
