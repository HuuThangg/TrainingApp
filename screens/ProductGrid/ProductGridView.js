import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
} from 'react-native'
import { images, icons, colors, fontSizes } from '../../constants/index'
import Icon from 'react-native-vector-icons/FontAwesome5'
import GridItem from './GridItem';

function ProductGridView(props) {
    const [products, setProducts] = useState([
        {
            url: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119.jpg',
            price: 75,
            productName: 'SamSung',
            specifications: [
                'Tot',
                'mau ma dep',
                'pin tot',
            ],
            reviews: 19,
            starts: 5,
        },
        {
            url: 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/325815861.jpeg',
            price: 75,
            productName: 'Iphone 14',
            specifications: [
                'Tot',
                'mau ma dep',
                'pin tot',
            ],
            reviews: 35,
            starts: 2,
        },
        {
            url: 'https://cdn.tgdd.vn/Products/Images/42/240194/nokia-105-4g-blue-600x600.jpg',
            price: 750,
            productName: 'Nokia',
            specifications: [
                'Tot',
                'mau ma dep',
                'pin tot',
            ],
            reviews: 19,
            starts: 1,
        },
        {
            url: 'https://didongviet.vn/pub/media/catalog/product//o/p/oppo-reno-6-didongviet-thumb2.jpg',
            price: 430,
            productName: 'Oppo',
            specifications: [
                'Tot',
                'mau ma dep',
                'pin tot',
            ],
            reviews: 19,
            starts: 5,
        },
        {
            url: 'https://cdn.tgdd.vn/Products/Images/42/213031/s16/iphone-12-red-3-650x650.png',
            price: 500,
            productName: 'Iphone 12',
            specifications: [
                '123',
                '222',
                '444',
            ],
            reviews: 400,
            starts: 5,
        },
        {
            url: 'https://duongphi.com/wp-content/uploads/2020/10/2021_12_04_17_09_IMG_7352.png',
            price: 100,
            productName: 'Iphone 11',
            specifications: [
                '333',
            ],
            reviews: 500,
            starts: 4,
        },
        {
            url: 'https://iphonebinhphuoc.vn/wp-content/uploads/2021/01/iphone-12-finish-select-202207-blue.jpeg',
            price: 660,
            productName: 'Iphone 13 Pro',
            specifications: [
                '555',
                '22',
            ],
            reviews: 860,
            starts: 5,
        },
        {
            url: 'https://24hshop.vn/wp-content/uploads/2022/09/samsung-a53.png',
            price: 550,
            productName: 'SumSung 1',
            specifications: [
                '3454363',
            ],
            reviews: 400,
            starts: 5,
        },
        {
            url: 'https://image-us.24h.com.vn/upload/3-2022/images/2022-07-21/1-1658388060-309-width740height555.jpg',
            price: 80,
            productName: 'SumSung 2',
            specifications: [
                '35345',
                '345345',
                '345345',
            ],
            reviews: 80,
            starts: 3,
        },
        {
            url: 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1799791919.jpeg',
            price: 95,
            productName: 'SumSung 3',
            specifications: [
                '234232',
                '2432342',
                '2342342',
            ],
            reviews: 50,
            starts: 3,
        },
        {
            url: 'https://cdn.tgdd.vn/Products/Images/42/213031/s16/iphone-12-red-3-650x650.png',
            price: 500,
            productName: 'Ihone x',
            specifications: [
                '234234324',
                '242342',
                '2423432',
            ],
            reviews: 90,
            starts: 4,
        },
        {
            url: 'https://cdn.tgdd.vn/Products/Images/42/213031/s16/iphone-12-red-3-650x650.png',
            price: 430,
            productName: 'Phone 13',
            specifications: [
                '2353252',
                '235235',
            ],
            reviews: 200,
            starts: 5,
        },
        {
            url: 'https://didongviet.vn/pub/media/catalog/product//o/p/oppo-reno-6-didongviet-thumb2.jpg',
            price: 105,
            productName: 'Oppo 1',
            specifications: [
                '35345345',
                '345345',
                '34534534',
            ],
            reviews: 9,
            starts: 1,
        },
    ])
    return <View style={{
        flex: 1,
    }}>
        <FlatList
            style={{ marginTop: 5 }}
            data={products}
            numColumns={2}
            keyExtractor={item => item.productName}
            renderItem={({ item, index }) =><GridItem item={item} index={index}
            onPress={()=>{
                let cloneProducts = products.map(eachProduct => {
                    if (item.productName == eachProduct.productName) { //kiểm tra phần tư ban đầu = phần tử bấm vào
                        //  return {...eachProduct,isSaved:true} //nhân bảng và thêm issaved bằng true
                        return {
                            ...eachProduct,
                            isSaved: eachProduct.isSaved == false
                                || eachProduct.isSaved == undefined ? true : false
                        }
                    }
                    return eachProduct
                })
                setProducts(cloneProducts) //cập nhật lại 
            }}/> }
        />
    </View>
}

export default ProductGridView