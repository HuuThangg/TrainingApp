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
import { images, icons, colors, fontSizes } from '../../constants/index'
import { UIButton, UIHeader } from '../../components/index'
import Icon from 'react-native-vector-icons/FontAwesome5'
import SettingItem from './SettingItem';


function CapNhatThongTin(props) {
    const { navigation, route } = props
    const { navigate, goBack } = navigation
    return <View style={{
        flexDirection: 'column',
        backgroundColor: 'whitesmoke',
        flex: 1
    }}>
        <View style={{
            backgroundColor: 'white'
        }}>
            <UIHeader
                title={"Cập nhật thông tin"}
                leftIconName={"arrow-left"}
                onPressLeftIcon={() => {
                    goBack()
                }} />
        </View>
        <View>
            <Text style={{
                fontSize:fontSizes.h4,
                 fontWeight:'bold',
                 marginHorizontal:20,
                 marginTop:20
                 }}>Họ và tên
                 <Text style={{color:'red'}}> *</Text>
            </Text>
            <TextInput 
            placeholder='Họ và tên'
            placeholderTextColor={colors.placeholder}
            marginHorizontal={20}
            marginTop={10}
            style={{borderRadius:8,
            color:'black',
            borderWidth:0.5,
            width:'90%',
            height:50,
            }}/>
        </View>

        <View>
            <Text style={{
                fontSize:fontSizes.h4,
                 fontWeight:'bold',
                 marginHorizontal:20,
                 marginTop:20
                 }}>Họ và tên
                 <Text style={{color:'red'}}> *</Text>
            </Text>
            <TextInput 
            placeholder='Họ và tên'
            placeholderTextColor={colors.placeholder}
            marginHorizontal={20}
            marginTop={10}
            style={{borderRadius:8,
            color:'black',
            borderWidth:0.5,
            width:'90%',
            height:50,
            }}/>
        </View>
    </View>
}
export default CapNhatThongTin