
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Fragment } from 'react';

import Header from './src/Components/Header/Header';

import Home from './src/Components/Home/Home';
import FilmDetail from './src/Components/Details/FilmDetail';
import Favorite from './src/Components/Favorite/Favorites';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';



const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();


const App = () => {

  return (
    // <Fragment>
    //     <Header />
    //     <Home />
    // </Fragment>
    <>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Movies" component={MyTabsBar} />
          <Stack.Screen name="Details" component={FilmDetail} />
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
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tab.Screen name="Movies" component={Home} />
      <Tab.Screen name="Favorite" component={Favorite} />
    </Tab.Navigator>


  );
}

export default App;

