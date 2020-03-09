import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import asd from '../component/login'
import home from '../component/asd'
import tabnav from './tabnav'

const Stack = createStackNavigator();
export default (props) => {
    return (
        <Stack.Navigator initialRouteName="Login" headerMode="none">
            <Stack.Screen name="tabmenu" component={tabnav} />
            <Stack.Screen name="Login" component={asd} />
        </Stack.Navigator>
    )
}