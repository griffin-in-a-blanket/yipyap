import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"


export default Post = ({ post }) => {
  const { title, content, upvote, downvote, author} = post
  const voteTotal = upvote - downvote
    
  return (
    <View style={styles.postContainer}>
      <View style={styles.vote}>
        <Ionicons size={26} name="ios-arrow-up" />
          <Text style={styles.content}>{ voteTotal }</Text>
        <Ionicons size={26} name="ios-arrow-down" />
      </View>

      <View style={styles.post}>
        <Text style={styles.title}>{ title }</Text>
        <Text>by { author }</Text>

        <Text style={styles.content}>{ content }</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
	allPosts: {
		flexDirection: "column",
	},

	postContainer: {
		flexDirection: "row",
	},

	vote: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center"
	},

	post: {
		flex: 5,
		flexDirection: "column",
	},

	title: {
		fontSize: 25,
		fontWeight: "bold",
	},

	content: {
		color: "orange",
	},
})
