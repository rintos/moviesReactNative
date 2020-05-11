import React, { Fragment,useState,useEffect } from 'react';
import listFilmes from '../Api/feed';
import Films from '../Home/Films';
import {
    FlatList
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

let numOfColumns = 2;

const Home = ({navigation}) => {

    const [films, setFilms] = useState([])
    useEffect(() => {
        listFilmes(setFilms);
    },[])

    return(
        <Fragment>
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
        </Fragment>
      );
}

export default Home


