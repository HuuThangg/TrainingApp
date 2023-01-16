//import * as firebase from 'firebase'
import {initializeApp} from 'firebase/app'
import {getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    sendEmailVerification
    } from "firebase/auth"
import {
    getDatabase,
    ref as firebaseDatabaseRef,
    set as firebaseSet,
    child,
    get
    
} from "firebase/database"

const  firebaseConfig= {
        apiKey: "AIzaSyB5OeX72YpS_EM-C-DaS01SNRhSUuErl2o",
        authDomain: "reactnative2022-49c5d.firebaseapp.com",
        databaseURL: "https://reactnative2022-49c5d-default-rtdb.firebaseio.com",
        projectId: "reactnative2022-49c5d",
        storageBucket: "reactnative2022-49c5d.appspot.com",
        appId:"1:672041692015:android:34cf288b305946f3e2169a",
        messagingSenderId: "672041692015",
}
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const firebaseDatabase = getDatabase()

export{
    auth,
    firebaseDatabase,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    firebaseDatabaseRef,
    firebaseSet,
    child,
    get,
    sendEmailVerification
}