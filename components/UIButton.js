import React,{Component} from "react"
import {TouchableOpacity,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
function UIButton(props){
    const{onPress,title,isSelected}=props
    return <TouchableOpacity
        onPress={props.onPress}
        style={{
            borderColor: 'white',
            borderWidth: 1,
            height: 45,
            borderRadius: 5,
            marginHorizontal: 15,
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isSelected==true ? 'white':null
        }}>
        { isSelected==true && <Icon name={"check-circle"}
            style={{
                fontSize: 20,
                color: 'green',
                position: 'absolute',
                top: 10,
                left: 10
            }} />}
        <Text style={{
            color: '#ED6263'
        }}>{props.title}</Text>
    </TouchableOpacity>
}
export default UIButton