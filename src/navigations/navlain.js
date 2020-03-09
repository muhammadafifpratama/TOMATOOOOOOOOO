import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import home from '../component/home'
import detail from '../component/restaurantdetail'
import cart from '../component/cart'

const Stack = createStackNavigator();
export default (props) => {
    return (
        <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name="Home" component={home} />
            <Stack.Screen name="Detail" component={detail} />
            <Stack.Screen name="cart" component={cart} />
        </Stack.Navigator>
    )
}