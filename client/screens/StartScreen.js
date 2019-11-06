import React from "react";
import { View, Text, Image, KeyboardAvoidingView, StyleSheet } from "react-native";
import SignInScreen from '../auth/SignInScreen';
import Styles from '../constants/Styles';

export default class StartScreen extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={Styles.container}>
                <View style={styles.imageView}>
                    <Text style={styles.text}>Yip Yap</Text>
                    <Image
                        source={{uri: 'https://i.imgur.com/RKGuS5u.jpg'}}
                        style={styles.image}
                    />
                    <Text style={styles.text}>Powered By Friends of Griffin</Text>
                </View>
                <SignInScreen navigation={this.props.navigation} />
            </KeyboardAvoidingView>
        ) 
    }
}

const styles = StyleSheet.create({
    imageView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150
    },
    text: {
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        opacity: 0.8
    }
})