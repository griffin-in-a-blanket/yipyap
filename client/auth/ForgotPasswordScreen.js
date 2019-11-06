import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import * as firebase from "firebase";

import Styles from '../constants/Styles';

export default class ForgotPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  onResetPasswordPress = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then(
        () => {
          Alert.alert("Password reset email has been sent, try not to forget this one");
        },
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
            returnKeyType="go"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            style={Styles.inputText}
          />
        </View>
        <View style={Styles.buttonContainer}>
          <TouchableOpacity onPress={this.onResetPasswordPress}>
            <Text style={Styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onGoBackPress}>
            <Text style={Styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}