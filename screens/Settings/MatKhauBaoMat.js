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
    Switch,

} from 'react-native'
import { images, icons, colors, fontSizes } from '../../constants/index'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { UIHeader } from '../../components'
import SettingItem from './SettingItem';
function MatKhauBaoMat(props) {

    const { navigation, route } = props
    const { navigate, goBack } = navigation
    const [isEnabledLockApp, setisEnabledLockApp] = useState(true)
    return <View style={{
        flexDirection: 'column',
        backgroundColor: 'whitesmoke',
        flex: 1
    }}>
        <View style={{
            backgroundColor: 'white'
        }}>
            <UIHeader
                title={"Mật khẩu & Bảo mật"} key={"Mật khẩu & Bảo mật"}
                leftIconName={"arrow-left"}
                onPressLeftIcon={() => {
                    goBack()
                }} />
            <TouchableOpacity style={{}}>
                <SettingItem title={"Thay đổi mật khẩu"} iconright={"chevron-right"} />
            </TouchableOpacity>

            <View style={{
                flexDirection: 'row',
                paddingVertical: 10 // khoảng cách trên dưới 10
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h4,
                    paddingStart: 10,
                    marginStart:25
                }}>Xác thực bằng Touch ID/Face ID</Text>
                <View style={{ flex: 1 }} />
                <Switch
                    trackColor={{ false: "silver", true: "limegreen" }}
                    thumbColor={isEnabledLockApp ? 'white' : 'white'}
                    //ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                        // đảo isEnabledLockApp từ true thành false rồi gán lại giá trị cho setisEnabledLockApp
                        setisEnabledLockApp(!isEnabledLockApp)
                    }}
                    value={isEnabledLockApp}
                    style={{ marginEnd: 10 }}
                />
            </View>
            <TouchableOpacity style={{}}>
                <SettingItem title={"Thay đổi mật khẩu"} iconright={"chevron-right"} />
            </TouchableOpacity>
        </View>

        <View style={{
            flexDirection:'row', 
            alignItems:'center', 
            marginStart:3}}>
            <Icon name='exclamation-triangle'
                style={{ marginStart: 5 }}
                size={15}
                color={'orange'} />
            <Text style={{
                marginStart:10
                }}>Lưu ý: Tất cả các phương pháp sinh trắc học được {'\n'}
                đăng ký trong thiết bị đều có thể mở khóa hồ sơ.</Text>
        </View>
    </View>
}
export default MatKhauBaoMat