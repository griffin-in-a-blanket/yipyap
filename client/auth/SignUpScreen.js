import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import * as firebase from "firebase";
import Styles from '../constants/Styles';

export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirm: ""
    };
  }

  onSignUpPress = () => {
    if (this.state.password !== this.state.passwordConfirm) {
      Alert.alert("Passwords do not match");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {},
        error => {
          Alert.alert(error.message);
        }
      );
  };

  onGoBackPress = () => {
    this.props.navigation.navigate("Start");
  };

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
            returnKeyType="next"
            ref={input => (this.passwordInput = input)}
            value={this.state.password}
            onSubmitEditing={() => this.passwordConfirmInput.focus()}
            onChangeText={text => this.setState({ password: text })}
            style={Styles.inputText}
          />
          <TextInput
            placeholder="confirm password"
            placeholderTextColor="rgba(255, 255, 255, 0.8)"
            secureTextEntry
            returnKeyType="go"
            ref={input => (this.passwordConfirmInput = input)}
            value={this.state.passwordConfirm}
            onChangeText={text => this.setState({ passwordConfirm: text })}
            style={Styles.inputText}
          />
        </View>
        <View style={Styles.buttonContainer}>
          <TouchableOpacity onPress={this.onSignUpPress}>
            <Text style={Styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onGoBackPress}>
            <Text style={Styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}