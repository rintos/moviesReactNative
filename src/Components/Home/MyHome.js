
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Fragment } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home/Home';
import Favorites from '../Favorite/Favorites';

import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const MyHome = () => {

    return (

        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Movies" component={Home} />
                <Tab.Screen name="Favorites" component={Favorites} />
            </Tab.Navigator>
        </NavigationContainer>

    );


}

export default MyHome;
