import React from "react"
import { ScrollView, StyleSheet, Text } from "react-native"
import { ExpoLinksView } from "@expo/samples"

export default function TrendingScreen() {
	return (
		<ScrollView style={styles.container}>
			{/**
			 * Go ahead and delete ExpoLinksView and replace it with your content;
			 * we just wanted to provide you with some helpful links.
			 */}
			<Text>Dogs > Cats</Text>
		</ScrollView>
	)
}

TrendingScreen.navigationOptions = {
	title: "Trending",
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: "#fff",
	},
})
