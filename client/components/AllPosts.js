import React from "react"
import { ScrollView } from "react-native"
import * as firebase from "firebase"

import Post from "./Post"

export default class AllPosts extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: []
		}
  }
  
  async componentDidMount() {
		const posts = []

    await firebase.database().ref("posts").once(
			'value', snapshot => {
				snapshot.forEach(childSnapshot => {
					const childKey = childSnapshot.val()
					posts.push(childKey)
				})
			}
		)

    this.setState({ posts })
  }

	render() {
		return (
			<ScrollView>
				{
					this.state.posts.map((post, i) => 
						<Post post = { post } key = {i} />
					)
				}
			</ScrollView>
		)
	}
}
