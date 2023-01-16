// yarn add react-native-keyboard-aware-scroll-view
import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    ScrollView
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { images, colors, icons, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { isValidEmail, isValidPassword } from '../utilites/validation'
import {
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    firebaseDatabase,
    auth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from '../firebase/firebase'
function Register(props) {
    const [keyboardDidShow, setkeyboardDidShow] = useState(false)
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    //luu tru email/password
    const [email, setEmail] = useState('huuang@gmail.com')
    const [password, setPassword] = useState('123456Abc')
    const [retypepassword, setRetypePassword] = useState('123456Abc')
    const isValidationOK = () => email.length > 0 && password.length > 0
        && isValidEmail(email) == true
        && isValidPassword(password) == true
        && password == retypepassword
    useEffect(() => {
        const xx = auth
        Keyboard.addListener('keyboardDidShow', () => {
            setkeyboardDidShow(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setkeyboardDidShow(false)
        })
    })

    //navigation
    const { navigation, route } = props
    const { navigate, goBack } = navigation
    return <KeyboardAwareScrollView
            style={{
                flex: 100,
                backgroundColor: colors.primary,
            }}>
            <View style={{
                flex: 25,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginBottom:10
            }}>
                <Text style={{
                    fontSize: fontSizes.h2,
                    fontWeight: 'bold',
                    width: '50%',
                    color: 'white'
                }}
                >Already have an Account?</Text>
                <Image source={images.computer} style={{
                    width: 120,
                    height: 120,
                    alignSelf: 'center',
                    tintColor: 'white'
                }} />
            </View>
            <View style={{
                flex: 45,
                backgroundColor: 'white',
                padding: 10,
                margin: 10,
                borderRadius: 20,
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
                        marginBottom: 10,
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
                        placeholder='Re-Enter your password'
                        value={password}
                        placeholderTextColor={colors.placeholder} />
                    <View style={{
                        height: 1,
                        backgroundColor: colors.primary,
                        width: '100%',
                        marginBottom: 10,
                        marginHorizontal: 15,
                        alignSelf: 'center'
                    }} />
                    <Text style={{
                        color: 'red',
                        fontSize: fontSizes.h5
                    }}>{errorPassword}</Text>
                </View>

                <View style={{
                    marginHorizontal: 15,
                }}>
                    <Text style={{
                        color: colors.primary,
                        fontSize: fontSizes.h5,
                    }}>Retype Password:</Text>
                    <TextInput
                        onChangeText={(text) => {
                            setErrorPassword(isValidPassword(text) == true ?
                             '' : 'passs >3 not in format')
                            setRetypePassword(text)
                        }}
                        style={{
                            color: 'black',
                        }}
                        secureTextEntry={true}
                        placeholder='Re-Enter your password'
                        value={retypepassword}
                        placeholderTextColor={colors.placeholder} />
                    <View style={{
                        height: 1,
                        backgroundColor: colors.primary,
                        width: '100%',
                        marginBottom: 5,
                        marginHorizontal: 15,
                        alignSelf: 'center'
                    }} />
                    <Text style={{
                        color: 'red',
                        fontSize: fontSizes.h5
                    }}>{errorPassword}</Text>
                </View>
                <TouchableOpacity
                    disabled={isValidationOK() == false}
                    onPress={() => {
                        createUserWithEmailAndPassword(auth,email,password)
                        .then((userCredential)=>{
                            const user = userCredential.user
                            sendEmailVerification(user).then(()=>{
                                console.log('Email sent')
                            })
                            firebaseSet(firebaseDatabaseRef(
                                firebaseDatabase,
                                `users/${user.uid}`
                            ),{
                                email:user.email,
                                emailVerified:user.emailVerified,
                                accessToken:user.accessToken
                            })             
                            navigate('UITab')  

                        }).catch((error)=>{
                            alert(`error: ${error.message}`)
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
                        color: 'white'
                    }}>Register</Text>
                </TouchableOpacity>
            </View>

            {keyboardDidShow == false ? <View style={{
                flex: 20
            }}>
                <View style={{
                    height: 40,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 20
                }}>
                    <View style={{ height: 1, backgroundColor: 'white', flex: 1 }} />
                    <Text style={{
                        padding: 8,
                        fontSize: fontSizes.h4,
                        color: 'white',
                        alignSelf: 'center',
                        marginHorizontal: 5
                    }}>User other methods?</Text>
                    <View style={{ height: 1, backgroundColor: 'white', flex: 1 }} />
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
                flex: 25
            }}></View>}
    </KeyboardAwareScrollView>
}
export default Register