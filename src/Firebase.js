import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAi6ok5sXAhbUd2Z-DiZSO7gDsYbkpwc8A",
    authDomain: "textit-8768b.firebaseapp.com",
    projectId: "textit-8768b",
    storageBucket: "textit-8768b.appspot.com",
    messagingSenderId: "518143037034",
    appId: "1:518143037034:web:a5ae6942d6283e1f23c413",
  })
  .auth();
