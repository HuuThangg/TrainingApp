/**
 * 
 */

import {AppRegistry} from 'react-native'
import React from 'react';
import {name as appName} from './app.json'
import Welcome from './screens/Welcome'

let fakedProducts =[
    {productName:'iphone 6',
year:2015},
{productName:'iphone 7',
year:2016},
{productName:'iphone 8',
year:2017},
{productName:'iphone 9',
year:2018}
]
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
AppRegistry.registerComponent(appName,()=>()=> <Welcome/>)