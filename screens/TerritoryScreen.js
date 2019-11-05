import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function TerritoryScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
       <Text>I wish Griffin was a dog</Text>
    </ScrollView>
  );
}

TerritoryScreen.navigationOptions = {
  title: 'Territory',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});