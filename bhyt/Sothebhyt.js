import React,{render,Component} from "react";
import { View, Text, ImageBackground,Image, ScrollView } from 'react-native'
import { images, icons, fontSizes } from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Thebhyt } from "../components";
import { reduceHooks } from "react-table";

function Sothebhyt(props) {
    return <View style={{
        backgroundColor: 'white',
        flex: 100
    }}>
        <ImageBackground
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
            <View style={{ height: 25 }} />

            <View style={{
                flex: 40,
                //flexDirection: 'row',
                marginHorizontal: 20,
                backgroundColor: '#e6e6fa',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                borderRadius: 2,
            }}>
                <View style={{
                    marginLeft: 8,
                    marginRight: 8
                }}>
                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                    }}>
                        <Icon name='user-circle' style={{
                            fontSize: 70,
                            marginHorizontal: 20,
                            marginTop: 10,
                            color: 'white'
                        }}></Icon>
                        <View style={{
                            marginTop: 10,
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: fontSizes.h2,
                            }}>Ho va ten</Text>
                            <Text>han the gia tri</Text>
                            <Text>tu 01/01/2022 den 31/12/2022</Text>
                        </View>

                    </View>
                    <Thebhyt name='Ngày sinh'
                    data='23/04/1998'/>

                    <Thebhyt name='Giới tính'
                    data='Nam'/>

                    <Thebhyt name='Số thẻ'
                    data='DN479465461651679037'/>

                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-around',
                        alignItems:'center',
                        marginTop: 15,
                    }}>
                        <Text style={{
                            flex:30,
                            alignSelf:'flex-start',
                        }}>Nơi ĐKKCB BĐ</Text>
                        <Text style={{
                            flex:70,
                        }}>Bệnh viện thành phố Thủ Đức (Mã:79037)</Text>
                    </View>

                    <Thebhyt name='Thời gian 5 năm liên tục'
                    data='01/06/2026'/>
                    </View>
            </View>
            <View style={{ height: 35 }} />
            <ScrollView>
            <View style={{
                flex: 30,
                marginHorizontal: 20,
                backgroundColor: '#e6e6fa',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                borderRadius: 2,
               
            }}>
                <Text style={{
                    fontSize:fontSizes.h4,
                    color:'blue',
                    marginLeft: 8,
                    marginRight: 8
                }}>Thông tin quyền lợi:</Text>
                <Text style={{
                     marginLeft: 12,
                     marginRight: 8
                }}>Được hưởng 80% chi phí khám bệnh, chữa bệnh {"\n"} trong phạm vi được hưởng BHYT {"\n"}(áp dụng tỉ lệ thanh toán 1 số thuốc, hóa chất,{"\n"}
                    vật tư ý tế và dịch vụ kỹ thuật theo quy định của Bộ {"\n"}trưởng Bộ y tế),{"\n"}Trong trường hợp điều trị nội trú trái tuyến tại{"\n"} CSKCB tuyến TW
                    sẽ được hưởng 32% (TH trên thẻ{"\n"} có mã nơi sinh sống là K1 hoặc K2 hoặc K3 sẽ được {"\n"}80%),</Text>
            </View>
            <View style={{ flex:3 }} />
            <View style={{
                flex:7,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    marginHorizontal: 20,
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 35
                }}>
                    <Image source={icons.bhxh}
                        style={{
                            width: 30,
                            height: 30,
                        }} />
                    <Text style={{
                    }}>Sử dụng thẻ</Text></View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image source={icons.bhxh}
                        style={{
                            width: 30,
                            height: 30,
                        }} />
                    <Text>Hình ảnh thẻ</Text>
                </View>
            </View>
            </ScrollView>
        </ImageBackground>
    </View>
}

export default Sothebhyt