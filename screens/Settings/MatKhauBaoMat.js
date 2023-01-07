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

function MatKhauBaoMat(props){

    const{navigation,route}=props
    const{navigate,goBack}=navigation
    return <View style={{
        flexDirection:'column'
    }}>
        <UIHeader 
        title={"abc"}
        leftIconName={"arrow-left"}
        rightIconName={"ellipsis-v"}
        onPressLeftIcon={ ()=>{
           goBack()
        }}
        onPressRightIcon={ ()=>{
            alert('press right icon')
        }}/>
        <Text>abc</Text>
    </View>
}
export default MatKhauBaoMat