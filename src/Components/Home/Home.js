import React, { Fragment,useState,useEffect } from 'react';
import listFilmes from '../Api/feed';
import Films from '../Home/Films';
import {
    FlatList, View, StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

let numOfColumns = 2;

const Home = ({navigation}) => {

    const [films, setFilms] = useState([])
    useEffect(() => {
        listFilmes(setFilms);
    },[])

    return(
        <Fragment>
          <View style={styles.container}>
            <FlatList
              data={films}
              keyExtractor={(item) => item.id.toString()}
              numColumns={numOfColumns}
              renderItem={({item}) => 
                  <Fragment>
                    <Films 
                      title={item.original_title}
                      poster={item.poster_path}
                      description={item.overview}
                      filmSelected={item}
                      navigation={navigation}
                    />
                  </Fragment>}
             >
            </FlatList>

          </View>
        </Fragment>
      );
}

export default Home



const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})