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
import { images, icons, colors, fontSizes } from '../../constants/index'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { createIconSetFromFontello } from 'react-native-vector-icons';

function _getColorFromStatus(status){
    if(status.toLowerCase().trim() == 'Opening soon'){
        return colors.success
    }else if(status.toLowerCase().trim() == 'Closing soon'){
        return colors.alter
    }else if(status.toLowerCase().trim() == 'Comming soon'){
        return colors.waring
    }
    return colors.success
}
function FoodItem(props){
    let{name,price,socialNetworks,status,url,website}=props.food
    return <View style={{
        height: 150,
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: 'row'
    }}>
        <Image style={{
            width: 100,
            height: 100,
            resizeMode: 'cover',
            borderRadius: 10,
            marginRight: 15
        }}
            source={{
                uri:url
            }} />
        <View style={{
            flex: 1,
            marginRight: 10,
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h6,
                fontWeight: 'bold'
            }}>{name}</Text>
            <View style={{ height: 1, backgroundColor: 'black' }} />
            <View style={{flexDirection:'column'}}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                }}>Status: </Text>
                <Text style={{
                    color: _getColorFromStatus(status),
                    fontSize: fontSizes.h6,
                }}>{status.toUpperCase()}</Text>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                }}>Price:{price}$ </Text>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                }}>Food Type: Pizza </Text>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                }}>Website:{website} </Text>
                <View style={{flexDirection:'row'}}>
                <Icon style={{paddingEnd:5}}
                name='facebook' size={18} color={"black"}/>
                <Icon style={{paddingEnd:5}}
                name='twitter' size={18} color={"black"}/>
                <Icon style={{paddingEnd:5}}
                name='instagram' size={18} color={"black"}/>
                </View>
            </View>
        </View>
    </View>
}

export default FoodItem