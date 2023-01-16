import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native'
import {    
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    firebaseDatabase,
    auth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
} from '../firebase/firebase'
import { images, icons, colors, fontSizes } from '../constants/index'
import { UIButton } from '../components/index'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { isValidEmail, isValidPassword } from '../utilites/validation'

function Login(props) {
    const [keyboardDidShow, setkeyboardDidShow] = useState(false)
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    //luu tru email/password
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isValidationOK = () => email.length > 0 && password.length >0
                                && isValidEmail(email) == true
                                && isValidPassword(password) == true
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setkeyboardDidShow(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setkeyboardDidShow(false)
        })
    })

        //navigation
        const{navigation,route}=props
        const{navigate,goBack}=navigation
    return <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
            flex: 100,
            backgroundColor: 'white',
        }}>
        <View style={{
            flex: 35,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
        }}>
            <Text style={{
                fontSize: fontSizes.h2,
                fontWeight: 'bold',
                width: '50%'
            }}
            >Already have an Account?</Text>
            <Image source={images.computer} style={{
                width: 120,
                height: 120,
                alignSelf: 'center',
                tintColor: colors.primary
            }} />
        </View>
        <View style={{
            flex: 30,
        }}>
            <View style={{
                marginHorizontal: 15,
            }}>
                <Text style={{
                    color: colors.primary,
                    fontSize: fontSizes.h5,
                }}>Email:</Text>
                <TextInput
                    onChangeText={(text) => {
                        // if(isValidEmail(text)==false){
                        //     setErrorEmail('Email not in format')
                        // }else{
                        //     setErrorEmail('')
                        // }
                        setErrorEmail(isValidEmail(text) == true ? '' : 'Email not in format')
                        setEmail(text)
                    }}
                    style={{
                        color: 'black'
                    }}
                    placeholder='example.@gmail.com'
                    value={email}
                    placeholderTextColor={colors.placeholder} />
                <View style={{
                    height: 1,
                    backgroundColor: colors.primary,
                    width: '100%',
                    marginBottom: 15,
                    marginHorizontal: 15,
                    alignSelf: 'center'
                }} />
                <Text style={{
                    color: 'red',
                    fontSize: fontSizes.h5
                }}>{errorEmail}</Text>
            </View>
            <View style={{
                marginHorizontal: 15,
            }}>
                <Text style={{
                    color: colors.primary,
                    fontSize: fontSizes.h5,
                }}>Password:</Text>
                <TextInput
                    onChangeText={(text) => {
                        setErrorPassword(isValidPassword(text) == true ? '' : 'passs >3 not in format')
                        setPassword(text)
                    }}
                    style={{
                        color: 'black',
                    }}
                    secureTextEntry={true}
                    placeholder='Enter your password'
                    value={password}
                    placeholderTextColor={colors.placeholder} />
                <View style={{
                    height: 1,
                    backgroundColor: colors.primary,
                    width: '100%',
                    marginBottom: 15,
                    marginHorizontal: 15,
                    alignSelf: 'center'
                }} />
                <Text style={{
                    color: 'red',
                    fontSize: fontSizes.h5
                }}>{errorPassword}</Text>
            </View>

        </View>
        {keyboardDidShow == false ? <View style={{
            flex: 15
        }}>
            <TouchableOpacity
                disabled = {isValidationOK() == false}
                onPress={() => {
                    //navigate('UITab')
                    //alert(`Email = ${email},password=${password}`)
                    signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {                        
                        const user = userCredential.user  
                       //debugger                      
                        navigate('UITab')    
                    }).catch((error) => {
                        //debugger
                        alert(`Cannot signin, error: ${error.message}`)
                    })

                }}
                style={{
                    backgroundColor: isValidationOK() == true
                                ? colors.primary : colors.inactive,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50%',
                    alignSelf: 'center',
                    borderRadius: 18
                }}>
                <Text style={{
                    padding: 8,
                    fontSize: fontSizes.h4,
                    color:'white'
                }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    alert('Press register')
                }}
                style={{
                    padding: 5
                }}>
                <Text style={{
                    padding: 8,
                    fontSize: fontSizes.h4,
                    color: colors.primary,
                    alignSelf: 'center'
                }}>New user? Register now</Text>
            </TouchableOpacity>
        </View> : <View style={{
            flex: 15
        }}></View>}

        {keyboardDidShow == false ? <View style={{
            flex: 15
        }}>
            <View style={{
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 20
            }}>
                <View style={{ height: 1, backgroundColor: 'black', flex: 1 }} />
                <Text style={{
                    padding: 8,
                    fontSize: fontSizes.h4,
                    color: 'black',
                    alignSelf: 'center',
                    marginHorizontal: 5
                }}>User other methods?</Text>
                <View style={{ height: 1, backgroundColor: 'black', flex: 1 }} />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <Icon name='facebook' size={35} color={colors.facebook}></Icon>
                <View style={{ width: 15 }} />
                <Icon name='google' size={35} color={colors.google}></Icon>
            </View>
        </View> : <View style={{
            flex: 15
        }}></View>}
    </KeyboardAvoidingView>
}

export default Login    