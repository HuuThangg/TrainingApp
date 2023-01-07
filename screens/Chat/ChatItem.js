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
import { reduceHooks } from 'react-table';

function ChatItem(props) {
    let { name,
        url,
        Message,
        numberOfUnreadMessages } = props.user
    const { onPress } = props
    return (<TouchableOpacity
        onPress={onPress}
        style={{
            height: 80,
            paddingTop: 20,
            paddingStart: 10,
            flexDirection: 'row',

        }}>
        <View>
            <Image style={{
                width: 50,
                height: 50,
                resizeMode: 'cover',
                borderRadius: 25,
                marginRight: 15,
                marginStart: 10
            }}
                source={{
                    uri: url
                }} />
            {numberOfUnreadMessages > 0 && <Text style={{
                backgroundColor: colors.primary,
                position: 'absolute',
                right: 8,
                fontSize: fontSizes.h6 * 0.8,
                borderRadius: 10,
                paddingHorizontal: numberOfUnreadMessages > 9 ? 2 : 4,
                color: 'white',

            }}>{numberOfUnreadMessages}</Text>
            }
        </View>
        <View style={{
            flexDirection:'column'
            }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize:fontSizes.h5,
                color:'black'
            }}>{name}</Text>
            <Text style={{
               fontSize:fontSizes.h6
            }}>{Message}</Text>
        </View>
        <View style={{
            flexDirection:'column',
            flex:1,
            justifyContent:'center',
            alignItems:'flex-end',
            marginRight:10
            }}>
            <Text style={{
                fontSize:fontSizes.h6*0.8,
                color:'black'
            }}>4 minutes ago</Text>
        </View>

    </TouchableOpacity>)
}

export default ChatItem