import firebase from 'firebase/app';
import 'firebase/auth'

import db from '../db/firestore'

const createUserProfile = userProfile => {
  db
    .collection('Profiles')
    .doc(userProfile.uid)
    .set(userProfile)
}

export async function register({email, password, username, avatar}){
  try {
    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password)
    await createUserProfile({uid: user.uid, username, email, avatar, joinedChats: []})
  } catch(error) {
    return Promise.reject(error.message)
  }
}

export const login = ({email, password}) =>
  firebase.auth().signInWithEmailAndPassword(email, password)

export const logout = () =>
  firebase.auth().signOut()

export const onAuthStateChange = (onAuth) => {
  firebase.auth().onAuthStateChanged(onAuth)
}