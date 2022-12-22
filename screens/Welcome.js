import React,{useState,useEffect} from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { sum2Number, substract2Number, PI } from '../utilites/Culculation'
import { images, icons, Icons } from '../constants/index'
import { UIButton } from '../components/index'
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
//thu tu chay const => let => var
function Welcome(props) {

    const [accountTypes, setAccountTypes] = useState([
        {
            name: 'Influencer',
            isEnabled: true,
        },
        {
            name: 'Business',
            isSelected: false,
        },
        {
            name: 'Individual',
            isSelected: false,
        }
    ])
    return <View style={{
        backgroundColor: 'white',
        flex: 100
    }}>
        <ImageBackground
            source={images.background}
            resizeMode='cover'
            style={{
                flex: 100,
            }}
        >
            <View style={{
                flex: 20,

            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <Image source={icons.flame}
                        style={{
                            marginStart: 10,
                            marginEnd: 5,
                            width: 30,
                            height: 30,
                        }} />
                    <Text style={{ color: 'white' }}>YOURCOMPANY.CO</Text>
                    <View style={{ flex: 1 }} />
                    <Image source={icons.question}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: 'white',
                            marginEnd: 10
                        }} />
                </View>
            </View>
            <View style={{
                flex: 20,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    marginBottom: 7,
                    color: 'white'
                }}>Welcome to</Text>
                <Text style={{
                    marginBottom: 7,
                    color: 'white'
                }}>YOURCOMPANY.CO !</Text>
                <Text style={{
                    marginBottom: 7,
                    color: 'white',
                    fontSize: 12
                }}>Please select your account type</Text>
            </View>

            <View style={{
                flex: 40
            }}>
                {accountTypes.map(accountType =>
                    <UIButton onPress={() => {
                        let newAccountTypes = accountTypes.map(eachAccountType=>{
                            return {
                                ...eachAccountType,
                                isSelected:eachAccountType.name==accountType.name
                            }
                    })
                    setAccountTypes(newAccountTypes);
                    }}
                        title={accountType.name}
                        isSelected={accountType.isSelected}
                    />)
                }
            </View>

            <View style={{
                flex: 20,
            }}></View>
        </ImageBackground>
    </View>
}
/*
const WellcomeScreen = (props)=>{
    const {x,y}=props
    const {person} = props
    const{name,age,mail}=person
    const {product}=props
    return <View >
        <Text>x={x},y={y}</Text>
        <Text>name={name},age={age},email={mail}</Text>
        {product.map(eachProduct =>
            <Text>{eachProduct.productName},{eachProduct.year}</Text>)}
            <Text>sum 2 and 3 = {sum2Number(2,3)}</Text>
            <Text>contrac 3 and 2 = {substract2Number(3,2)}</Text>
            <Text>PI = {PI}</Text>
    </View>
}
*/
export default Welcome
// function wellcomeScreen(props){
//     return <Text>This is main screen</Text>
// }

