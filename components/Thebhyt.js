import React,{Component} from "react"
import {TouchableOpacity,Text,View} from 'react-native'
import {colors} from '../constants'

function Thebhyt (props){

return <View style={{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent:'space-between',
   marginTop: 15,
}}>
    <Text>{props.name}</Text>
    <Text>{props.data}</Text>
</View>
}

export default Thebhyt