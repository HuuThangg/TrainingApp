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
    
    return (<TouchableOpacity
        onPress={onPress}
        style={{
            height: 80,
            paddingTop: 20,
            paddingStart: 10,
            flexDirection: 'row',
        }}>  
    </TouchableOpacity>)
}

export default ChatItem