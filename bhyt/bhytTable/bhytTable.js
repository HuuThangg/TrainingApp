import React,{useState} from 'react';
import { View, Text, ScrollView, ImageBackground, Image, FlatList } from 'react-native'
import { images, icons } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5'

function bhytTable (props){
return <View>
    <tr key={id}>
          <td>{ngayvao}</td>
          <td>{ngayra}</td>
          <td>{tenbenh}</td>
        </tr>
</View>
}