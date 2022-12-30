/*
yarn add react-navigation
yarn add react-safe-area-context
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
 */
import * as React from 'react'
import {Setting,
    ProductGridView,
    FoodList,
    Profile} from '../screens'
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import{fontSizes,colors} from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Tab=createBottomTabNavigator()
const screenOptions =({route})=>({
    headerShown:false, // ẩn phần header có sẵn
    tabBarActiveTintColor:'white', // chỉnh màu cho navigator (tabbar)
    tabBarInactiveTintColor:'rgba(0,0,0,0.2)',
    tabBarActiveBackgroundColor:colors.primary,
    tabBarInactiveBackgroundColor:colors.primary,
    tabBarIcon:({focused,color,size})=>{ //focused kiểm tra xem đang có chọn hay hk
               //đổi hình tương ứng
        // let screenName = route.name
        // let iconName = "facebook"    
        // if(screenName == "ProductGridView"){
        //     iconName = "align-center"
        // }else if(screenName == "FoodList"){
        //     iconName="accusoft"
        // }else if(screenName =="Setting"){
        //     iconName="cogs"
        // }

        // câu điều kiện để đổi Icon theo tên
        return <Icon name={route.name == "ProductGridView" ? "align-center" :
            (route.name == "FoodList" ? "accusoft" : (
                route.name == "Setting" ? "cogs" : 
                (route.name=="Profile" ? "user": "")))}
            size={25}
            color={focused ? 'white' : colors.facebook}></Icon>
    },
    
})
function UITab(props){
    return <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
        name={"ProductGridView"} 
        component={ProductGridView}
        options={{
            tabBarLabel:'Products'
        }}
        />
        <Tab.Screen 
        name={"FoodList"} 
        component={FoodList}
        options={{
            tabBarLabel:'Foods'
        }}
        />
        <Tab.Screen 
        name={"Setting"} 
        component={Setting}
        options={{
            tabBarLabel:'Settings'
        }}
        />
        <Tab.Screen 
        name={"Profile"} 
        component={Profile}
        options={{
            tabBarLabel:'Profile'
        }}
        />

    </Tab.Navigator>
}

export default UITab
