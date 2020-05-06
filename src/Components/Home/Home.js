import React, { Fragment,useState,useEffect } from 'react';
import listFilmes from '../Api/feed';
import Films from '../Home/Films';
import {
    FlatList
} from 'react-native';


const Home = () => {

    const [films, setFilms] = useState([])
    useEffect(() => {
        listFilmes(setFilms);
    },[])
  
    return(
        <Fragment>
            <FlatList
              data={films}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => 
                  <Fragment>
                    <Films 
                      title={item.original_title}
                      poster={item.poster_path}
                    />
                  </Fragment>}
             >
            </FlatList>
        </Fragment>
      );
}

export default Home