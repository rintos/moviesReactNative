import React, { Fragment } from 'react'
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import styleHome from './styleHome'
import FilmDetail from '../Details/FilmDetail';


const Films = ({navigation,title, poster, year, genre, description}) => {

    let urlImage = "https://image.tmdb.org/t/p/w500";
    let posterUrl = urlImage + poster;
    
    return (

        <View>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Details',{
                                titleDetail: title, 
                                posterDetail: posterUrl,
                                yearDetail: year,
                                genreDetail: genre,
                                overviewDetail: description})
                        }>
                <Image
                    source={{ uri: posterUrl }}
                    style={styleHome.poster}
                />
            </TouchableOpacity>
            <Text style={styleHome.text}>{title}</Text>

        </View>
    )



}

export default Films


//onPress={() => navigation.navigate('Details')