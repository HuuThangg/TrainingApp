import React,{useState} from 'react';
import { View, Text, SafeAreaView, ImageBackground, Image, FlatList,tbody } from 'react-native'
import { images, icons } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Table,Row} from 'react-native-table-component'
const headers = ['ngayvao','ngayra','tenbenh']
function Thongtinbhyt(props) {
    
    const [lichsu,setLichsu]=useState(
        [
            {
                ngayvao:'20/12/2022',
                ngayra:'20/12/2022',
                tenbenh:'Cam thuong',
            },
            {
                ngayvao:'21/12/2022',
                ngayra:'21/12/2022',
                tenbenh:'benh tang huyet ap',
            },
            {
                ngayvao:'22/12/2022',
                ngayra:'22/12/2022',
                tenbenh:'dau rang',
            }
        ]
    )

    return <View style={{
        backgroundColor: 'white',
        flex: 100
    }}>
        <ImageBackground
            //source={images.background}
            resizeMode='cover'
            style={{
                flex: 100,
            }}>

            <View style={{

                flex: 10,
                backgroundColor: '#1e90ff',

            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 80,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Icon name='angle-left' style={{
                        color: 'white',
                        fontSize: 30,
                        position: 'absolute',
                        top: 25,
                        left: 10
                    }} />
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                    }}>THẺ BẢO HIỂM Y TẾ</Text>
                </View>
            </View>

            <View style={{
                flex: 15,
                flexDirection: 'row',
            }}>
                <Icon name='user-circle' style={{
                    fontSize: 70,
                    marginHorizontal: 20,
                    marginTop: 20,
                }}></Icon>
                <Text style={{
                    top: 40,
                    color: 'black',
                    fontWeight: "bold",
                    fontSize: 15
                }}>TEST</Text>
                <Text style={{
                    top: 60,
                    right: 40,
                    color: 'black',
                    fontSize: 15
                }}>Ma BHXH:123456789</Text>
            </View>

            <View style={{
                flex: 15,
                flexDirection: 'row',
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 35
                }}>
                    <Image source={icons.bhxh}
                        style={{
                            width: 50,
                            height: 50,
                        }} />
                    <Text style={{
                    }}>Lịch sử</Text></View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image source={icons.bhxh}
                        style={{
                            width: 50,
                            height: 50,
                        }} />
                    <Text>Giấy được cấp{"\n"} theo thông tư {"\n"}56/2017/TT-BYT</Text>
                </View>
            </View>

            <Text style={{
                borderBottomWidth: 1,
                borderBottomColor: '#B8B8B8',
            }}></Text>

            <View style={{
                flex: 45,
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                //flexDirection:'row'
            }}>
                <Text style={{
                    marginEnd: 100,
                    marginTop: 20,
                    fontWeight: "bold",
                    fontSize: 20,
                    textDecorationLine: 'underline',
                    color: '#1e90ff'
                }}>2022</Text>
                {/* <Image source={icons.caretdown} style={{
                     color:'#1e90ff',
                     fontSize:20,
                }}></Image> */}
                <SafeAreaView style={{flex:1}}>
                    <View style={{flex:1,padding:10}}>
                        <Table >
                            <Row>
                                data={headers}
                            </Row>
                        </Table>
                    </View>
                </SafeAreaView>
            </View>

            <View style={{
                flex: 10,
            }}>

            </View>
        </ImageBackground>
    </View>
}

export default Thongtinbhyt