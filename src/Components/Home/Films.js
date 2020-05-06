import React, { Fragment } from 'react'
import {
    View,
    Image,
    Text
} from 'react-native';
import styleHome from './styleHome'


const Films = ({title, poster}) => {

    let urlImage = "https://image.tmdb.org/t/p/w500";
    let posterUrl = urlImage + poster;
    console.log(posterUrl);
    
    return (

        <View>
            <Image
                source={{ uri: posterUrl }}
                style={styleHome.poster}
            />
            <Text style={styleHome.text}>{title}</Text>

        </View>
    )



}

export default Films