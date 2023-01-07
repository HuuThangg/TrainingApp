import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'
import { images, icons, colors, fontSizes } from '../../constants/index'
import Icon from 'react-native-vector-icons/FontAwesome5'


function SettingItem (props){
    //const{navigation,route}=props
    //const{navigate,goBack}=navigation
    const {title,iconright,iconleft}=props
    return <TouchableOpacity onPress={() => {
        alert(`${title}`)
       //navigate('MatKhauBaoMat')
    }}>
        
    <View style={{
        flexDirection: 'row',
        paddingVertical:10,
        paddingStart:15
    }}>
        <Icon name={iconleft}
            style={{ marginStart: 5 }}
            size={20}
            color={'orange'} />
        <Text style={{
            color: 'black',
            fontSize: fontSizes.h3,
            paddingStart:15,
        }}>{title}</Text>
         <View style={{flex:1}}/>
         <Icon name={iconright}
        style={{ paddingEnd:5 }}
        size={22}
        color={'rgba(0,0,0,0.4)'}
         />   
    </View>
    <View style={{flex:1,height:0.6, backgroundColor:'black',width:'100%', opacity:0.3,marginTop:8}}/>
    </TouchableOpacity>
}

export default SettingItem