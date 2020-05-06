import React, { Fragment } from 'react'
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import styleHome from './styleHome'
import FilmDetail from '../Details/FilmDetail';


const Films = ({title, poster}) => {

    let urlImage = "https://image.tmdb.org/t/p/w500";
    let posterUrl = urlImage + poster;
    console.log(posterUrl);

    const showDetail = () => {

        console.warn(title)

        return(
            <>
                <FilmDetail 
                    titleDetail={title}
                    posterDetail={posterUrl }
                />
            </>
        )
    }
    
    return (

        <View>
            <TouchableOpacity onPress={showDetail}>
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