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

function FiveStar(props){
    const {numberOfStars} = props
    return <View style={{
        flexDirection:'row',
        justifyContent:'flex-end'
    }}>
       { [0,1,2,3,4].map(item => <Icon name='star'
       key={`${item}`}
    style={{ marginEnd: 2 }}
    size={8} color={item <= numberOfStars-1 ? colors.waring : 'black'}
 />)}
    </View>

}

export default FiveStar