import {Dimensions, Platform} from 'react-native'
export const isIOS=()=>Platform.OS ==='ios'
export const screenWidth = Dimensions.get("screen").width; // tính chiều ngàn toàn màn hình
export const screenHeight = Dimensions.get("screen").height; // tính chiều cao toàn màn hình