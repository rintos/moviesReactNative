import React, {Fragment} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const Favorites = () => {
    return(
        <>
            <View style={styles.container}>
                <Text>Favorites Page List</Text>
                <Text>Favorites Page List</Text>
                <Text>Favorites Page List</Text>
                <Text>Favorites Page List</Text>
            </View>
        </>
    );
}

export default Favorites


const styles = StyleSheet.create({
    container: {
      flex:1,
      
    }
  })