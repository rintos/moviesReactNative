import React, { Fragment, useEffect, useState } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

import styleHome from '../Home/styleHome';
import styleDetail from './styleDetail';

import listGenres from '../Api/genre';

let urlImage = "https://image.tmdb.org/t/p/w500";


const FilmDetail = ({ route, navigation }) => {

    const { filmSelected } = route.params;

    const posterUrl = urlImage + filmSelected.poster_path;

    const [genres, setGenres] = useState([])

    useEffect(() => {
        listGenres(setGenres, filmSelected.genre_ids);     
    }, [])

    return (
        <>
            <View style={styles.viewStyle}>
                <Image
                    source={{ uri: posterUrl }}
                    style={styleDetail.image}
                />
                <Text
                    style={styleHome.text, styles.text}
                >{JSON.stringify(filmSelected.original_title)}</Text>
                <ColoredLine />
                <Text style={styleHome.text, styles.text}>{filmSelected.release_date}</Text>
                <ColoredLine />
                <View style={styles.onSameLine}>
                    {genres.map(element => {                       
                        return (<Text style={styles.text}>{element}, </Text>) 
                    })}
                </View>
                <ColoredLine />
                <Text style={styles.text}>{filmSelected.overview}</Text>
            </View>
        </>
    )

}

const ColoredLine = () => (
    <View
        style={{
            backgroundColor: "#808080",
            height: 1
        }}
    />
);

export default FilmDetail


const styles = StyleSheet.create({
    onSameLine: {
        flexDirection: "row",        
    },
    viewStyle: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom:20,
    }, 
    text: {
        marginTop: 10,
        marginBottom: 10,
        
    }

})
