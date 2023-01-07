import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
} from 'react-native'
import { images, icons, colors, fontSizes } from '../constants/index'
import Icon from 'react-native-vector-icons/FontAwesome5'

function UIHeader(props) {
    const { title,
        leftIconName = "",
        rightIconName = "",
        onPressLeftIcon,
        onPressRightIcon } = props
    return <View style={{
        height: 60,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'
    }}>
        { leftIconName != undefined ? <Icon 
            name={leftIconName}
            style={{ padding:10 }}
            size={23} color={'white'}
            onPress={onPressLeftIcon}
        /> : <View style={{width:50,height:50}}/>}
        <Text style={{
            color: 'white',
            alignSelf: 'center',
            lineHeight: 45,
            fontSize: fontSizes.h4
        }}>{title}</Text>
         { rightIconName != undefined ? <Icon 
            name={rightIconName}
            style={{ padding:10 }}
            size={23} color={'white'}
            onPress={onPressLeftIcon}
        /> : <View style={{width:50,height:50}}/>}
    </View>
}

export default UIHeader
