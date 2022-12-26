/**
 * 
 */

import {AppRegistry} from 'react-native'
import React from 'react';
import {name as appName} from './app.json'
import {Welcome,Login,FoodList,ProductGridView} from './screens/index'
import {Thongtinbhyt,Sothebhyt} from './bhyt'


/*
AppRegistry.registerComponent(appName,
    () => ()=> <WellcomeScreen 
            x={1} y={10}
            person={{
                name:'THang',
                age:'24',
                mail:'huuthang1215@gmail.com'
            }}
            product = {fakedProducts}
            />)
*/
//AppRegistry.registerComponent(appName,()=>()=> <Welcome/>)
AppRegistry.registerComponent(appName,()=> ()=> <ProductGridView/>)