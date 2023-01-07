import React, { useState, component } from 'react';
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
import {createNavigationContainerRef, NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import{StackRouter} from 'react-navigation'
import {Welcome,Login,Messenger} from '../screens'
import MatKhauBaoMat from '../screens/Settings/MatKhauBaoMat'
import UITab from '../navigation/UITab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

function App(props){
   return <NavigationContainer>
        <Stack.Navigator initialRouteName='UITab' screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name={"Welcome"} component={Welcome}/>
            <Stack.Screen name={"Login"} component={Login}/>
            <Stack.Screen name={"UITab"} component={UITab}/>
            <Stack.Screen name={"Messenger"} component={Messenger}/>
            <Stack.Screen name={"MatKhauBaoMat"} component={MatKhauBaoMat}/>
        </Stack.Navigator>
    </NavigationContainer>
}

export default App