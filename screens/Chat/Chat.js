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
import ChatItem from './ChatItem';
import { nativeViewGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';

function Chat(props){
    const[users,setsUsers]=useState([
        {
            url:'https://randomuser.me/api/portraits/med/women/17.jpg',
            name:'Amanda',
            Message:'Hello, How are you?',
            numberOfUnreadMessages:3
        },
        {
            url:'https://randomuser.me/api/portraits/med/women/60.jpg',
            name:'nguyen van test',
            Message:'Hello, How are you?',
            numberOfUnreadMessages:15
        },
        {
            url:'https://randomuser.me/api/portraits/med/women/18.jpg',
            name:'nguyen van a',
            Message:'Hello, How are you?',
            numberOfUnreadMessages:8
        },
        {
            url:'https://randomuser.me/api/portraits/med/women/40.jpg',
            name:'Amanda',
            Message:'Hello, How are you?',
            numberOfUnreadMessages:55
        },
        {
            url:'https://randomuser.me/api/portraits/med/women/20.jpg',
            name:'Amanda',
            Message:'Hello, How are you?',
            numberOfUnreadMessages:0
        },
        {
            url:'https://randomuser.me/api/portraits/med/women/25.jpg',
            name:'Amanda',
            Message:'Hello, How are you?',
            numberOfUnreadMessages:100
        },
        {
            url:'https://randomuser.me/api/portraits/med/women/22.jpg',
            name:'Amanda',
            Message:'Hello, How are you?',
            numberOfUnreadMessages:60
        },{
            url:'https://randomuser.me/api/portraits/med/women/30.jpg',
            name:'Amanda',
            Message:'Hello, How are you?',
            numberOfUnreadMessages:0
        }

    ])
    const{navigation,route}=props
    const{navigate,goBack}=navigation
    return <View style={{
        flexDirection:'column'
    }}>
        <UIHeader 
        title={"Notifications"}
        leftIconName={"arrow-left"}
        rightIconName={"search"}
        onPressLeftIcon={ ()=>{
            alert('press left icon')
        }}
        onPressRightIcon={ ()=>{
            alert('press right icon')
        }}/>
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
           paddingStart:10
        }}>
            <Text style={{
                color:'black',
                fontSize:fontSizes.h6,
                marginStart:10
            }}>6 unread messages</Text>
            <Icon 
            name='search'
            style={{ padding:15 }}
            size={15} color={'black'}
            onPress={()=>{
                alert('you perss Delete')
            }}
        />
        </View>
        <FlatList style={{
            
        }} 
        data={users}
            renderItem={({ item }) => <ChatItem
                onPress={() => {
                   // alert(`you press item name: ${item.name}`)
                   navigate('Messenger',{user:item}) // trang truyền
                }}
                // user truyền từ mảng từ phần tử
                user={item} key={item.url} />}
                // phân biệt phần tử khác nhau (key duy nhất)
           // keyExtractor={item=>item.url}
             />
    </View>
}
export default Chat