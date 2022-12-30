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
    ScrollView,
    Switch,
} from 'react-native'
import { images, icons, colors, fontSizes } from '../constants/index'
import { UIButton, UIHeader } from '../components/index'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { isValidEmail, isValidPassword } from '../utilites/validation'
function Setting(props) {
    const [isEnabledLockApp,setisEnabledLockApp]=useState(true)
    const [isUseFingerprint,setisUseFingerprint]=useState(false)
    const [isEnabledChangePassword,setisEnabledChangePassword]=useState(true)
    return <View style={{
        flex: 1,
    }}>
        <UIHeader title={"Settings"} />

        <ScrollView>
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'red',
                    paddingStart: 10,
                }}>Common</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='globe'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Languagae</Text>
                <View style={{flex:1}}/>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingEnd: 10,
                    opacity:0.5,
                }}>English</Text>
                <Icon name='chevron-right'
                    style={{ paddingEnd:10 }}
                    size={20}
                    color={'black'} />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='cloud'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Enviroment</Text>
                <View style={{flex:1}}/>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingEnd: 10,
                    opacity:0.5
                }}>Production</Text>
                <Icon name='chevron-right'
                    style={{ paddingEnd:10 }}
                    size={20}
                    color={'black'} />
            </View>

            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'red',
                    paddingStart: 10,
                }}>Account</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='cloud'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Phone number</Text>
                <View style={{flex:1}}/>
                <Icon name='chevron-right'
                    style={{ paddingEnd:10 }}
                    size={20}
                    color={'black'} />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='envelope'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Email</Text>
                <View style={{flex:1}}/>
                <Icon name='chevron-right'
                    style={{ paddingEnd:10 }}
                    size={20}
                    color={'black'} />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='sign-out-alt'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Sign out</Text>
                <View style={{flex:1}}/>
                <Icon name='chevron-right'
                    style={{ paddingEnd:10 }}
                    size={20}
                    color={'black'} />
            </View>

            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'red',
                    paddingStart: 10,
                }}>Security</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='lock'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Lock app in background</Text>
                <View style={{flex:1}}/>
                <Switch
                    trackColor={{ false: "red", true: colors.primary }}
                    thumbColor={isEnabledLockApp ? colors.primary : 'red'}
                    //ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{
                        // đảo isEnabledLockApp từ true thành false rồi gán lại giá trị cho setisEnabledLockApp
                        setisEnabledLockApp(!isEnabledLockApp)
                    }}
                    value={isEnabledLockApp}
                    style={{marginEndEnd:10}}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='fingerprint'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Use fingerprint</Text>
                <View style={{flex:1}}/>
                <Switch
                    trackColor={{ false: "red", true: colors.primary }}
                    thumbColor={isUseFingerprint ? colors.primary : 'red'}
                    //ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{
                        // đảo isEnabledLockApp từ true thành false rồi gán lại giá trị cho setisEnabledLockApp
                        setisUseFingerprint(!isUseFingerprint)
                    }}
                    value={isUseFingerprint}
                    style={{marginEndEnd:10}}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='lock'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Change password</Text>
                <View style={{flex:1}}/>
                <Switch
                    trackColor={{ false: "red", true: colors.primary }}
                    thumbColor={isEnabledChangePassword ? colors.primary : 'red'}
                    //ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{
                        // đảo isEnabledLockApp từ true thành false rồi gán lại giá trị cho setisEnabledLockApp
                        setisEnabledChangePassword(!isEnabledChangePassword)
                    }}
                    value={isEnabledChangePassword}
                    style={{marginEndEnd:10}}
                />
            </View>

            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'red',
                    paddingStart: 10,
                }}>Misc</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='passport'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Term of Service</Text>
                <View style={{flex:1}}/>
                <Icon name='chevron-right'
                    style={{ paddingEnd:10 }}
                    size={20}
                    color={'black'} />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='file-alt'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Open source licenses</Text>
                <View style={{flex:1}}/>
                <Icon name='chevron-right'
                    style={{ paddingEnd:10 }}
                    size={20}
                    color={'black'} />
            </View>
           
        </ScrollView>
    </View>
}

export default Setting