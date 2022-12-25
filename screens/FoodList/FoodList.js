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
    ScrollView
} from 'react-native'
import { images, icons, colors, fontSizes } from '../../constants/index'
import { UIButton } from '../../components/index'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { isValidEmail, isValidPassword } from '../../utilites/validation'
import FoodItem from './FoodItem';

function FoodList(props) {

    const [foods, setfoods] = useState([
        {
            name: 'Pizza, with rabbit and chicken',
            url: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love.jpg',
            status: 'Opening soon',
            price: 123.56,
            website: 'https//google.com',
            socialNetworks: [
                {
                    facebook: 'https://www.facebook.com/huuthangle1998',
                    intagram: 'https://www.intagram.com/huuthangle1998',
                }
            ]
        },
        {
            name: 'Ga ran',
            url: 'https://cdn4.vectorstock.com/i/1000x1000/85/48/italian-food-menu-vector-18398548.jpg',
            status: 'Opening now',
            price: 124.56,
            website: 'https//google.com',
            socialNetworks: [
                {
                    facebook: 'https://www.facebook.com/huuthangle1998',
                    intagram: 'https://www.intagram.com/huuthangle1998',
                }
            ]
        },
        {
            name: 'mi y pasdron gazpacho',
            url: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love.jpg',
            status: 'Closing soon',
            price: 127.56,
            website: 'https//google.com',
            socialNetworks: [
                {
                    intagram: 'https://www.intagram.com/huuthangle1998',
                }
            ]
        },
        {
            name: 'mi y gazpacho',
            url: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love.jpg',
            status: 'Comming soon',
            price: 124.56,
            website: 'https//google.com',
            socialNetworks: [
                {
                    facebook: 'https://www.facebook.com/huuthangle1998',
                }
            ]
        },
        {
            name: 'mi y gazpacho itali',
            url: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love.jpg',
            status: 'Comming soon',
            price: 124.56,
            website: 'https//google.com',
            socialNetworks: [
                {
                    facebook: 'https://www.facebook.com/huuthangle1998',
                }
            ]
        },
        {
            name: 'KFC 23435',
            url: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love.jpg',
            status: 'Closing soon',
            price: 128.55,
            website: 'https//google.com',
            socialNetworks: [
                {
                    facebook: 'https://www.facebook.com/huuthangle1998',
                }
            ]
        }
    ])
    return <View style={{
        flex: 1,
        backgroundColor: 'white',
    }}>
        <View>
            <ScrollView>
                {foods.map(eachfood =><FoodItem food = {eachfood}/>)}
            </ScrollView>
        </View>
    </View>
}

export default FoodList