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
    const[messages,setMessages]=useState([
        {
           
        }
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
        
        {/* <FlatList style={{
            
        }} 
        data={users}
            renderItem={({ item }) => <ChatItem
                onPress={() => {
                    alert(`you press item name: ${item.name}`)
                }}
                // user truyền từ mảng từ phần tử
                user={item} key={item.url} />}
                // phân biệt phần tử khác nhau (key duy nhất)
           // keyExtractor={item=>item.url}
             /> */}
    </View>
}
export default Messenger