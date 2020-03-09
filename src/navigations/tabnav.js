import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import homenav from '../navigations/navlain'
import Logout from '../component/logout'

const Tab = createBottomTabNavigator();

const LogOutComp = (nav) => {
    return ({ navigation }) => <Logout navigation={navigation} rootStackNavigation={nav} />
}

export default ({ navigation }) => {
    return (
        <Tab.Navigator
            initialRouteName="HomeNav"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomeNav') {
                        iconName = 'home';
                    } else if (route.name === 'Logout') {
                        iconName = 'restaurant-menu'
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={35} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                showLabel: false
            }}
        >
            <Tab.Screen name="HomeNav" component={homenav} />
            <Tab.Screen name="Logout">
                {LogOutComp(navigation)}
            </Tab.Screen>
        </Tab.Navigator>
    )
}