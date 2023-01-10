import * as firebase from 'firebase'
import {inittializeApp} from 'firebase/app'
import {getDatabase} from "firebase/database"
import {getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword
    } from "firebase/auth"
const  firebaseConfig= {
        apiKey: "AIzaSyB5OeX72YpS_EM-C-DaS01SNRhSUuErl2o",
        authDomain: "reactnative2022-49c5d.firebaseapp.com",
        databaseURL: "https://reactnative2022-49c5d-default-rtdb.firebaseio.com",
        projectId: "reactnative2022-49c5d",
        storageBucket: "reactnative2022-49c5d.appspot.com",
        appId:"1:672041692015:android:34cf288b305946f3e2169a",
        messagingSenderId: "672041692015",
}
const app = inittializeApp(firebaseConfig)
const auth = getAuth()
const firebasedatabase = getDatabase()

export{
    auth,
    firebasedatabase,
    createUserWithEmailAndPassword
}