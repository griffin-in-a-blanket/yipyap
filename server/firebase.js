import * as firebase from firebase
import { firebaseConfig } from './secrets.js'

firebase.initializeApp(firebaseConfig);
firebase.analytics();

async const signup = (email, pass) => {
  try {
    await firebase.auth()
      .createUserWithEmailAndPassword(email, pass)
  } catch (error) {
    console.log(error.toString())
  }
}

async const login = (email, pass) => {
  try {
    await firebase.auth()
      .signInWithEmailAndPassword(email, pass)
  } catch (error) {
    console.log(error.toString())
  }
}

async const logout = () => {
  try {
    await firebase.auth().signOut()
  } catch (error) {
    console.log(error)
  }
}