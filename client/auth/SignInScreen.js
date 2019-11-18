import React from "react"
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import * as firebase from "firebase"

import { firebaseConfig } from "../../secrets"
import Styles from "../constants/Styles"

firebase.initializeApp(firebaseConfig)

export default class SignInScreen extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: "",
			password: "",
		}
	}

	onSignInPress = () => {
		firebase
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(
				() => {
					this.props.navigation.navigate("Home")
				},
				error => {
					Alert.alert(error.message)
				}
			)
	}

	onSignUpPress = () => {
		this.props.navigation.navigate("SignUp")
	}

	onGuestPress = () => {
		this.props.navigation.navigate("Home")
	}

	onForgotPasswordPress = () => {
		this.props.navigation.navigate("ForgotPassword")
	}

	render() {
		return (
			<View style={Styles.container}>
				<View style={Styles.container}>
					<TextInput
						placeholder="email"
						placeholderTextColor="rgba(255, 255, 255, 0.8)"
						returnKeyType="next"
						keyboardType="email-address"
						autoCapitalize="none"
						autoCorrect={false}
						onSubmitEditing={() => this.passwordInput.focus()}
						value={this.state.email}
						onChangeText={text => this.setState({ email: text })}
						style={Styles.inputText}
					/>
					<TextInput
						placeholder="password"
						placeholderTextColor="rgba(255, 255, 255, 0.8)"
						secureTextEntry
						returnKeyType="go"
						ref={input => (this.passwordInput = input)}
						value={this.state.password}
						onChangeText={text => this.setState({ password: text })}
						style={Styles.inputText}
					/>
				</View>
				<View style={Styles.buttonContainer}>
					<TouchableOpacity onPress={this.onSignInPress}>
						<Text style={Styles.buttonText}>Sign In</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.onSignUpPress}>
						<Text style={Styles.buttonText}>Sign Up</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.onGuestPress}>
						<Text style={Styles.buttonText}>Guest</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.onForgotPasswordPress}>
						<Text style={Styles.buttonText}>Forgot your password ?</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}
