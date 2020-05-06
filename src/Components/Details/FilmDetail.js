import React, {Fragment} from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

import styleHome from '../Home/styleHome';
import styleDetail from './styleDetail';

const FilmDetail = ({route, navigation}) => {


  const { titleDetail } = route.params;
  const { posterDetail } = route.params;
  const { yearDetail } = route.params;
  const { genreDetail } = route.params;
  const { overviewDetail } = route.params;

    return(
        <>
            <View>
                <Image 
                    source={{uri: posterDetail}}
                    style={styleDetail.image}
                />
                <Text
                    style={styleHome.text}
                >{JSON.stringify(titleDetail)}</Text>
                <Text style={styleHome.text}>{yearDetail}</Text>
                <Text style={styleHome.text}>{genreDetail}</Text>
                <Text >{overviewDetail}</Text>
            </View>
            
        </>
    )

}

export default FilmDetail
