import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default Post = () => (
  <View style = { styles.postContainer }>
    <View style = { styles.vote }>
      <Ionicons size = {26} name = 'ios-arrow-up' />
      <Text style = {styles.content}>0</Text>
      <Ionicons size = {26} name = 'ios-arrow-down' />
    </View>
    <View style = { styles.post }>
      <Text style = { styles.title }>Lorem ipsum dolor sit amet</Text>
      <Text style = { styles.content }>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
    </View> 
  </View>
)

const styles = StyleSheet.create({
  allPosts: {
    flexDirection: 'column'
  },

  postContainer: {
    flexDirection: 'row'
  },

  vote: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  post: {
    flex: 5,
    flexDirection: 'column',
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold'
  },

  content: {
    color: 'orange'
  }
});