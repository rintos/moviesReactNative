
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Fragment } from 'react';

import Header from './src/Components/Header/Header';

import Home from './src/Components/Home/Home';
import FilmDetail from './src/Components/Details/FilmDetail';
import Favorite from './src/Components/Favorite/Favorites';
import Detail from './src/Components/Favorite/Detail/Detail';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon from 'react-native-vector-icons/Ionicons';



const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();


const App = () => {

  return (
    <>
      {/* <Header /> */}

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Movies" component={MyTabsBar} />
          <Stack.Screen name="Details" component={FilmDetail} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>

      </NavigationContainer>

    </>
  );
}

function MyTabsBar() {
  return (
    <Tab.Navigator
      initialRouteName="Movies"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      // barStyle={{ backgroundColor: '#037bfc' }}
    >
      <Tab.Screen
        name="Movies"
        component={Home}
        options={{
          tabBarLabel: 'Movies',
          tabBarColor: '#037bfc',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          
          // tabBarIcon: ({ color }) => (
          //   <Icon name="home" color={color} size={26} />
          // ),
        }}
      />
      <Tab.Screen name="Favorite" component={Favorite}
        options={{
          tabBarLabel: 'Favorite',
          tabBarColor: '#f5425a',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          )
        }} />
    </Tab.Navigator>


  );
}

export default App;

