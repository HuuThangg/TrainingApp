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
import MessengerItem from './MessengerItem';

function Messenger(props){
    const[chatHistory,setchatHistory]=useState([
        {
           url:'https://randomuser.me/api/portraits/med/women/17.jpg',
           ShowUrl:true,
           isSender:true,
           messenger:'Hello',
           timestamp:1641654238000,
        },
        {
            url:'https://randomuser.me/api/portraits/med/women/17.jpg',
            ShowUrl:false,
            isSender:true,
            messenger:'How are you ?',
            timestamp:1641654298000,
         },
         {
            url:'https://randomuser.me/api/portraits/med/women/17.jpg',
            ShowUrl:false,
            isSender:true,
            messenger:'How about your work gfdg gdfgdf gdfg dfgdfg d gdg d gdgdfg dgd ?',
            timestamp:1641654538000,
         },
         {
            url:'https://randomuser.me/api/portraits/med/women/50.jpg',
            ShowUrl:true,
            isSender:false,
            messenger:'yes?',
            timestamp:1641654598000,
         },
         {
            url:'https://randomuser.me/api/portraits/med/women/50.jpg',
            ShowUrl:false,
            isSender:false,
            messenger:'I am fine',
            timestamp:1641654598000,
         },
         {
            url:'https://randomuser.me/api/portraits/med/women/17.jpg',
            ShowUrl:true,
            isSender:true,
            messenger:'Let`s go out',
            timestamp:1641654778000,
         },
    ])
   
    const{url,name}=props.route.params.user // trang nhận
    const{naviagte,goBack}= props.navigation
    return <View style={{
        flexDirection:'column'
    }}>
        <UIHeader 
        title={name}
        leftIconName={"arrow-left"}
        rightIconName={"ellipsis-v"}
        onPressLeftIcon={ ()=>{
           goBack()
        }}
        onPressRightIcon={ ()=>{
            alert('press right icon')
        }}/>
        
        <FlatList style={{
            
        }} 
        data={chatHistory}
            renderItem={({ item }) => <MessengerItem
                onPress={() => {
                    alert(`you press item name: ${item.timestamp}`)
                }}
                // user truyền từ mảng từ phần tử
                item={item} key={`${item.timestamp}`} />}
                // phân biệt phần tử khác nhau (key duy nhất)
           // keyExtractor={item=>item.url}
             />
    </View>
}
export default Messenger