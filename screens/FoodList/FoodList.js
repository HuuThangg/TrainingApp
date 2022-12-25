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
    FlatList,
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
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/huuthangle1998',
                instagram: 'https://www.intagram.com/huuthangle1998',
                twitter: 'https://www.facebook.com/huuthangle1998'
            }
        },
        {
            name: 'Ga ran',
            url: 'https://cdn4.vectorstock.com/i/1000x1000/85/48/italian-food-menu-vector-18398548.jpg',
            status: 'Opening now',
            price: 124.56,
            website: 'https//google.com',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/huuthangle1998',
                instagram: 'https://www.intagram.com/huuthangle1998',
            }
        },
        {
            name: 'mi y pasdron gazpacho',
            url: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love.jpg',
            status: 'Closing soon',
            price: 127.56,
            website: 'https//google.com',
            socialNetworks:
            {
                instagram: 'https://www.intagram.com/huuthangle1998',
                twitter: 'https://www.facebook.com/huuthangle1998'
            }
        },
        {
            name: 'mi y gazpacho',
            url: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love.jpg',
            status: 'Comming soon',
            price: 124.56,
            website: 'https//google.com',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/huuthangle1998',
                instagram: 'https://www.intagram.com/huuthangle1998',
                twitter: 'https://www.facebook.com/huuthangle1998'
            }
        },
        {
            name: 'mi y gazpacho itali',
            url: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love.jpg',
            status: 'Comming soon',
            price: 124.56,
            website: 'https//google.com',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/huuthangle1998',
                twitter: 'https://www.facebook.com/huuthangle1998'
            }
        },
        {
            name: 'SuBin',
            url: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love.jpg',
            status: 'Closing soon',
            price: 128.55,
            website: 'https//google.com',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/huuthangle1998',
                instagram: 'https://www.intagram.com/huuthangle1998',
            }
        },
        {
            name: 'KFC',
            url: 'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love.jpg',
            status: 'Closing soon',
            price: 128.55,
            website: 'https//google.com',
            socialNetworks:
            {
                facebook: 'https://www.facebook.com/huuthangle1998',
                instagram: 'https://www.intagram.com/huuthangle1998',
            }
        }
    ])
    const [categories, setCategories] = useState([
        {
            name: 'BBQ',
            url: 'https://cdn.cet.edu.vn/wp-content/uploads/2018/01/BBQ-la-gi.jpg',
        },
        {
            name: 'Coffee',
            url: 'https://cdn.cet.edu.vn/wp-content/uploads/2018/01/BBQ-la-gi.jpg',
        },
        {
            name: 'Noodels',
            url: 'https://cdn.cet.edu.vn/wp-content/uploads/2018/01/BBQ-la-gi.jpg',
        },
        {
            name: 'Hot Dots',
            url: 'https://cdn.cet.edu.vn/wp-content/uploads/2018/01/BBQ-la-gi.jpg',
        },
        {
            name: 'Food',
            url: 'https://cdn.cet.edu.vn/wp-content/uploads/2018/01/BBQ-la-gi.jpg',
        },
        {
            name: 'BreakFood',
            url: 'https://cdn.cet.edu.vn/wp-content/uploads/2018/01/BBQ-la-gi.jpg',
        },
        {
            name: 'Dinner',
            url: 'https://cdn.cet.edu.vn/wp-content/uploads/2018/01/BBQ-la-gi.jpg',
        },
        {
            name: 'Đồ ướng',
            url: 'https://cdn.cet.edu.vn/wp-content/uploads/2018/01/BBQ-la-gi.jpg',
        },
        {
            name: 'Ăn vặt',
            url: 'https://cdn.cet.edu.vn/wp-content/uploads/2018/01/BBQ-la-gi.jpg',
        },
        {
            name: 'Bánh ngọt',
            url: 'https://cdn.cet.edu.vn/wp-content/uploads/2018/01/BBQ-la-gi.jpg',
        },
        {
            name: 'Đồ mặn',
            url: 'https://cdn.cet.edu.vn/wp-content/uploads/2018/01/BBQ-la-gi.jpg',
        },
        {
            name: 'Rượu',
            url: 'https://cdn.cet.edu.vn/wp-content/uploads/2018/01/BBQ-la-gi.jpg',
        },
        {
            name: 'Nước ngọt',
            url: 'https://cdn.cet.edu.vn/wp-content/uploads/2018/01/BBQ-la-gi.jpg',
        },
        {
            name: 'Nước lọc',
            url: 'https://cdn.cet.edu.vn/wp-content/uploads/2018/01/BBQ-la-gi.jpg',
        }
    ])
    const [searchText,setSearchText]=useState('')
    const filteredFoods = () =>
        foods.filter(echachFood => echachFood.name.toLowerCase()
        .includes(searchText.toLowerCase()))
    
    return <View style={{
        flex: 1,
        backgroundColor: 'white',
    }}>
        <View>
            <View style={{
                marginHorizontal: 10,
                marginVertical: 10,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Icon name='search' size={15} color={"black"}
                    style={{
                        position: 'absolute',
                        top: 12,
                        left: 10
                    }} />
                <TextInput
                    autoCorrect={false}
                    onChangeText={(Text)=>{
                        setSearchText(Text)
                    }}
                    style={{
                        backgroundColor: 'black',
                        height: 40,
                        flex: 1,
                        marginEnd: 8,
                        borderRadius: 5,
                        opacity: 0.2,
                        paddingStart: 10,
                        color: 'white',
                        paddingStart: 30
                    }} />
                <Icon name='bars' size={30} color={"black"} />
            </View>

            <View style={{
                height: 100,
            }}>

                <View style={{ height: 1, backgroundColor: 'black' }} />
                <FlatList
                    horizontal={true}
                    data={categories}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => {
                        return <TouchableOpacity
                            onPress={() => {
                                alert(`Press ${item.name}`)
                            }}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Image style={{
                                width: 40,
                                height: 40,
                                resizeMode: 'cover',
                                borderRadius: 25,
                                margin: 10
                            }}
                                source={{
                                    uri:item.url
                                }} />
                            <Text style={{
                                color: 'black',
                                fontSize: fontSizes.h6
                            }}>{item.name}</Text>
                        </TouchableOpacity>
                    }}
                    style={{ flex: 1 }}>
                </FlatList>
                <View style={{ height: 1, backgroundColor: 'black' }} />
            </View>


            {/* <ScrollView>
                {foods.map(eachfood =><FoodItem food = {eachfood} key={eachfood.name}/>)}
            </ScrollView> */}
           {filteredFoods().length >0 ? <FlatList
                data={filteredFoods()}
                renderItem={({ item }) => <FoodItem
                    onPress={() => {
                        alert(`you press item name: ${item.name}`)
                    }}
                    food={item} key={item.name} />}
                keyExtractor={echachFood => echachFood.name}
            /> : <View style={{
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Text style={{
                    color:'black',
                    fontSize:fontSizes.h3
                }}>khong tim thay</Text>
                </View>}             
        </View>
    </View>
}

export default FoodList