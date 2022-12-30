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
    ScrollView,
    Switch,
} from 'react-native'
import { images, icons, colors, fontSizes } from '../constants/index'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { SafeAreaView } from 'react-navigation';
import {user as UserRepository,
population as PopulationRepository,
population} from '../repositories'
import dateTime, { convertDateTimeToString } from '../utilites/DateTime'

function Profile(props){
    const [user,setUser]=useState({})
    const[Populations,setPopulations]=useState({})
    //gọi khi thẻ load xong
    useEffect(()=>{
        UserRepository.getUserDetail().then(
            responseUser => setUser(responseUser))
        PopulationRepository.getPopulation({
            drilldowns: 'Nation',
            measures: 'Population'
    }).then(responsePopulations =>setPopulations(responsePopulations))
    },[])
    const{email,dateOfBirth,
        gender,userId,address,
        username,url,phone,registered}=user
    UserRepository.getUserDetail()
    return <SafeAreaView style={{
        flex:1,
        paddingTop:50,
        paddingStart:20,
        
        }}>
            <Image style={{
                width: 160,
                height: 160,
                resizeMode: 'cover',
                borderRadius: 80,
                alignSelf:'center',
                marginBottom:20

            }}
                source={{
                    uri: url
                }} />
            <View style={{flexDirection:'row'}}>
             <Text style={{fontWeight:'bold',fontSize:fontSizes.h5}}>Username:</Text>
             <Text>{username}</Text>
           </View>
           <View style={{flexDirection:'row'}}>
             <Text style={{fontWeight:'bold',fontSize:fontSizes.h5}}>Email:</Text>
             <Text>{email}</Text>
           </View>
           <View style={{flexDirection:'row'}}>
             <Text style={{fontWeight:'bold',fontSize:fontSizes.h5}}>DOB:</Text>
             <Text>{convertDateTimeToString(dateOfBirth)}</Text>
           </View>
           <View style={{flexDirection:'row'}}>
             <Text style={{fontWeight:'bold',fontSize:fontSizes.h5}}>Gender:</Text>
             <Text>{gender}</Text>
           </View>
           <View style={{flexDirection:'row'}}>
             <Text style={{fontWeight:'bold',fontSize:fontSizes.h5}}>Address:</Text>
             <Text>{address}</Text>
           </View>
           <View style={{flexDirection:'row'}}>
             <Text style={{fontWeight:'bold',fontSize:fontSizes.h5}}>phone:</Text>
             <Text>{phone}</Text>
           </View>
           <View>
                <Text>{JSON.stringify(Populations)}</Text>
           </View>
    </SafeAreaView>
}
export default Profile