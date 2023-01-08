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
    Dimensions,
} from 'react-native'
import { images, icons, colors, fontSizes } from '../../constants/index'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { reduceHooks } from 'react-table';
import { screenWidth } from '../../utilites/Device';

function ChatItem(props) {

    const { onPress } = props
    const { url, isSender, messenger, timestamp, ShowUrl } = props.item
    return (isSender == false ? <TouchableOpacity
        onPress={onPress}
        style={{
            paddingTop: 20,
            paddingStart: 10,
            alignItems: 'center',
            flexDirection: 'row',

        }}>
        {ShowUrl == true ? <Image style={{
            width: 40,
            height: 40,
            resizeMode: 'cover',
            borderRadius: 20,
            marginRight: 15,
            marginStart: 10
        }}
            source={{
                uri: url
            }} /> : <View style={{
                width: 40,
                height: 40,
                marginRight: 15,
                marginStart: 10
            }} />}
        <View style={{
            width: screenWidth * 0.7, //nhân kích thước chiều ngang màn hình 0.7
            // flex: 1,
            flexDirection: 'row',
        }}>
            <View>
                <Text style={{
                    fontSize: fontSizes.h6,
                    color: 'black',
                    paddingVertical: 5,
                    paddingHorizontal: 7,
                    backgroundColor: colors.messenger,
                    borderRadius: 10,
                }}>{messenger}</Text>
            </View>
            <View style={{ width: 20 }} />
        </View>
        {/* isSender = true */}
    </TouchableOpacity> :
        <TouchableOpacity
            onPress={onPress}
            style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>
            <View style={{
                width: screenWidth * 0.7, //nhân kích thước chiều ngang màn hình 0.7
                //flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end'
            }}>
                <View style={{ width: 40 }} />
                <View>
                    <Text style={{
                        fontSize: fontSizes.h6,
                        color: 'black',
                        paddingVertical: 5,
                        paddingHorizontal: 7,
                        backgroundColor: colors.messenger,
                        borderRadius: 10,
                    }}>{messenger}</Text>
                </View>
            </View>
            {ShowUrl == true ? <Image style={{
                width: 40,
                height: 40,
                resizeMode: 'cover',
                borderRadius: 20,
                marginRight: 15,
                marginStart: 10
            }}
                source={{
                    uri: url
                }} /> : <View style={{
                    width: 40,
                    height: 40,
                    marginRight: 15,
                    marginStart: 10
                }} />}
        </TouchableOpacity>)
}

export default ChatItem