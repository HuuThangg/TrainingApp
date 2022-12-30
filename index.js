/**
 yarn add axios
 */

import {AppRegistry} from 'react-native'
import React from 'react';
import {name as appName} from './app.json'
/*
import {Welcome,
    Login,
    FoodList,
    ProductGridView,
    Setting} from './screens'
import {Thongtinbhyt,Sothebhyt} from './bhyt'
import UITab from '../navigation/UITab'
*/

import App from './navigation/App';

AppRegistry.registerComponent(appName,()=> ()=> <App/>)