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
import FiveStar from './FiveStars';

function GridItem(props) {
    const{item,index,onPress}=props
    return <View style={{
        //backgroundColor: index % 2 == 0 ? 'green' : 'red',
        flex: 0.5,
        //height: 200,
        marginLeft: index % 2 == 0 ? 10 : 0,
        marginTop: 5,
        marginRight: 10,
        marginBottom: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black'
    }}>
        <View style={{
            flexDirection: 'row',
            marginTop: 10
        }}>
            <Image style={{
                width: 100,
                height: 100,
                resizeMode: 'cover',
                borderRadius: 20,
                marginRight: 15,

            }}
                source={{
                    uri: item.url
                }} />
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h2,
                flex: 1,
                textAlign: 'right'
            }}>$ {item.price} </Text>
        </View>
        <Text style={{
            color: colors.primary,
            fontSize: fontSizes.h4,
            fontWeight: 'bold',
            marginHorizontal: 10,
            marginTop: 5
        }}>$ {item.productName} </Text>
        {
            item.specifications.map(specification =>
                <Text
                    key={specification} 
                    style={{
                        color: 'black',
                        fontSize: fontSizes.h6,
                        paddingHorizontal: 10,
                        paddingBottom: 5
                    }}>
                    * {specification}</Text>)
        }
        <View style={{ flexDirection: 'row', padding: 5 }}>
            <TouchableOpacity
                onPress={onPress} 
                style={{ flexDirection: 'row' }}>
                <Icon name='heart'
                    style={{ marginEnd: 5 }}
                    size={22} color={
                        item.isSaved == undefined || item.isSaved == false ? 'black' : 'red'} />
                <Text style={{
                    color: item.isSaved == undefined || item.isSaved == false ? 'black' : 'red',
                    fontSize: fontSizes.h6 * 0.8,
                    width: 50,
                }}>Saved for later</Text>
            </TouchableOpacity>
            <View style={{
                flex: 1,

            }}>
                <FiveStar numberOfStars={item.starts} />
                <Text style={{
                    color: colors.success,
                    fontSize: fontSizes.h6 * 0.8,
                    textAlign: 'right'
                }}>
                    {item.reviews} reviews</Text>
            </View>
        </View>
    </View>
}

export default GridItem