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
import { images, icons, colors, fontSizes } from '../../constants/index'
import { UIButton, UIHeader } from '../../components/index'
import Icon from 'react-native-vector-icons/FontAwesome5'
import SettingItem from './SettingItem';
const [ungdung, setUngDung] = useState([
    {
        title: "Mật khẩu và bảo mật",
        iconleft: "check",
        conright: "chevron-right"
    }
])
function Setting(props) {
    //const{navigation,route}=props
    //const{navigate,goBack}=navigation
    const { onPress } = props
    /*
    const [isEnabledLockApp,setisEnabledLockApp]=useState(true)
    const [isUseFingerprint,setisUseFingerprint]=useState(false)
    const [isEnabledChangePassword,setisEnabledChangePassword]=useState(true)
    return <View style={{
        flex: 1,
    }}>
        <UIHeader title={"Settings"} />

        <ScrollView>
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'red',
                    paddingStart: 10,
                }}>Common</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='globe'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Languagae</Text>
                <View style={{flex:1}}/>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingEnd: 10,
                    opacity:0.5,
                }}>English</Text>
                <Icon name='chevron-right'
                    style={{ paddingEnd:10 }}
                    size={20}
                    color={'black'} />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='cloud'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Enviroment</Text>
                <View style={{flex:1}}/>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingEnd: 10,
                    opacity:0.5
                }}>Production</Text>
                <Icon name='chevron-right'
                    style={{ paddingEnd:10 }}
                    size={20}
                    color={'black'} />
            </View>

            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'red',
                    paddingStart: 10,
                }}>Account</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='cloud'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Phone number</Text>
                <View style={{flex:1}}/>
                <Icon name='chevron-right'
                    style={{ paddingEnd:10 }}
                    size={20}
                    color={'black'} />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='envelope'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Email</Text>
                <View style={{flex:1}}/>
                <Icon name='chevron-right'
                    style={{ paddingEnd:10 }}
                    size={20}
                    color={'black'} />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='sign-out-alt'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Sign out</Text>
                <View style={{flex:1}}/>
                <Icon name='chevron-right'
                    style={{ paddingEnd:10 }}
                    size={20}
                    color={'black'} />
            </View>

            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'red',
                    paddingStart: 10,
                }}>Security</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='lock'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Lock app in background</Text>
                <View style={{flex:1}}/>
                <Switch
                    trackColor={{ false: "red", true: colors.primary }}
                    thumbColor={isEnabledLockApp ? colors.primary : 'red'}
                    //ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{
                        // đảo isEnabledLockApp từ true thành false rồi gán lại giá trị cho setisEnabledLockApp
                        setisEnabledLockApp(!isEnabledLockApp)
                    }}
                    value={isEnabledLockApp}
                    style={{marginEndEnd:10}}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='fingerprint'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Use fingerprint</Text>
                <View style={{flex:1}}/>
                <Switch
                    trackColor={{ false: "red", true: colors.primary }}
                    thumbColor={isUseFingerprint ? colors.primary : 'red'}
                    //ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{
                        // đảo isEnabledLockApp từ true thành false rồi gán lại giá trị cho setisEnabledLockApp
                        setisUseFingerprint(!isUseFingerprint)
                    }}
                    value={isUseFingerprint}
                    style={{marginEndEnd:10}}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='lock'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Change password</Text>
                <View style={{flex:1}}/>
                <Switch
                    trackColor={{ false: "red", true: colors.primary }}
                    thumbColor={isEnabledChangePassword ? colors.primary : 'red'}
                    //ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>{
                        // đảo isEnabledLockApp từ true thành false rồi gán lại giá trị cho setisEnabledLockApp
                        setisEnabledChangePassword(!isEnabledChangePassword)
                    }}
                    value={isEnabledChangePassword}
                    style={{marginEndEnd:10}}
                />
            </View>

            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    color: 'red',
                    paddingStart: 10,
                }}>Misc</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='passport'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Term of Service</Text>
                <View style={{flex:1}}/>
                <Icon name='chevron-right'
                    style={{ paddingEnd:10 }}
                    size={20}
                    color={'black'} />
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical:10 // khoảng cách trên dưới 10
            }}>
                <Icon name='file-alt'
                    style={{ marginStart: 10 }}
                    size={20}
                    color={'black'} />
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingStart: 10,
                }}>Open source licenses</Text>
                <View style={{flex:1}}/>
                <Icon name='chevron-right'
                    style={{ paddingEnd:10 }}
                    size={20}
                    color={'black'} />
            </View>
           
        </ScrollView>
    </View>
    */
    return <View style={{
        flex: 1,
    }}>
        <View style={{
            height: 100,
            backgroundColor: colors.primary
        }}>
            <View style={{
                flexDirection: 'row',
                marginHorizontal: 20,
            }}>
                <Icon name='user-circle' style={{
                    fontSize: 70,
                    marginTop: 10,
                    color: 'white'
                }}></Icon>
                <View style={{
                    marginHorizontal: 20,
                    marginTop: 20
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: fontSizes.h4,
                        fontWeight: 'bold'
                    }}>Le Huu Thang</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: fontSizes.h4
                    }}>0378483232</Text>
                </View>
            </View>
        </View>
        <ScrollView>
            <View style={{
                marginTop: 5
            }}>
                <TouchableOpacity onPress={() => {
                    alert('abc')
                    //navigate('MatKhauBaoMat')
                }}>

                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 10,
                        paddingStart: 15
                    }}>
                        <Icon name='star-half-alt'
                            style={{ marginStart: 5 }}
                            size={20}
                            color={'orange'} />
                        <Text style={{
                            color: 'black',
                            fontSize: fontSizes.h3,
                            paddingStart: 15,
                        }}>{title}</Text>
                        <View style={{ flex: 1 }} />
                        <Icon name='chevron-right'
                            style={{ paddingEnd: 5 }}
                            size={22}
                            color={'rgba(0,0,0,0.4)'}
                        />
                    </View>
                    <View style={{ flex: 1, height: 0.6, backgroundColor: 'black', width: '100%', opacity: 0.3, marginTop: 8 }} />
                </TouchableOpacity>
                <SettingItem title={"Danh sách quan tâm"} iconleft={"star-half-alt"} iconright={"chevron-right"} />
                <SettingItem title={"Mật khẩu và bảo mật"} iconleft={"check"} iconright={"chevron-right"} />
                <SettingItem title={"Địa chỉ đã lưu"} iconleft={"map-marker-alt"} iconright={"chevron-right"} />
                <SettingItem title={"Đơn hàng"} iconleft={"car"} iconright={"chevron-right"} />
                <SettingItem title={"Tham gia cộng đồng"} iconleft={"users"} iconright={"chevron-right"} />
                <SettingItem title={"Điều khoản và quy định"} iconleft={"readme"} iconright={"chevron-right"} />
                <SettingItem title={"Những câu hỏi thường gặp"} iconleft={"question"} iconright={"chevron-right"} />
                <SettingItem title={"Quy trình đặt lịch và khám bệnh"} iconleft={"exclamation"} iconright={"chevron-right"} />
                <SettingItem title={"Chia sẻ ứng dụng"} iconleft={"share"} />
                <SettingItem title={"Hotline 1900 2855"} iconleft={"headset"} />
                <SettingItem title={"Đăng xuất"} iconleft={"sign-out-alt"} />
                {/* <FlatList
                data={ungdung}
                renderItem={({ item }) => <SettingItem
                    onPress={onPress}
                    sett={item} key={item.title} />}
                keyExtractor={echachSetting => echachSetting.title}
            /> */}
            </View>
        </ScrollView>
    </View>
}

export default Setting