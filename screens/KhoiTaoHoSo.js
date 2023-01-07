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
    FlatList,
    
} from 'react-native'
import { images, icons, colors, fontSizes } from '../../constants/index'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {UIHeader} from '../../components'

function KhoiTaoHoSo(props){

    // const{name}=props.route.params // trang nhận
    // const{naviagte,goBack}= props.navigation
    // return <View style={{
    //     flexDirection:'column'
    // }}>
    //     <UIHeader 
    //     title={name}
    //     leftIconName={"arrow-left"}
    //     rightIconName={"ellipsis-v"}
    //     onPressLeftIcon={ ()=>{
    //        goBack()
    //     }}
    //     onPressRightIcon={ ()=>{
    //         alert('press right icon')
    //     }}/>
    // </View>
}
export default KhoiTaoHoSo