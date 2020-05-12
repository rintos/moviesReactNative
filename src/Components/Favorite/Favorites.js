import React, {Fragment} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity, Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import ListFavorites from './ListFavorites';


const Favorites = ({ navigation }) => {
    return(
        <>
            <View style={styles.container}>
                <ListFavorites  navigation={navigation}/>
            </View>
        </>
        
        
    );
}

export default Favorites


const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    text: {
        fontSize: 50
    }


  })