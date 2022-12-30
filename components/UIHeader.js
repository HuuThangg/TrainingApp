import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
} from 'react-native'
import { images, icons, colors, fontSizes } from '../constants/index'
import Icon from 'react-native-vector-icons/FontAwesome5'

function UIHeader (props){
    const{title}=props
    return  <View style={{
        height:60,
        backgroundColor:colors.primary
    }}>
        <Text style={{
            color:'white',
            alignSelf:'center',
            lineHeight:45,
            fontSize:fontSizes.h4
        }}>{title}</Text>
    </View>
}
export default UIHeader