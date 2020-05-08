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
import { FlatList } from 'react-native-gesture-handler';

const FilmDetail = ({ route, navigation }) => {

    const { titleDetail } = route.params;
    const { posterDetail } = route.params;
    const { yearDetail } = route.params;
    const { genreDetail } = route.params;
    const { overviewDetail } = route.params;

    const [genres, setGenres] = useState([])
    const [listOfGenre, setListOfGenre] = useState([])

    useEffect(() => {
        listGenres(setGenres, genreDetail);

        // genres.forEach(element => {
        //     var i;
        //     for (i = 0; i < genreDetail.length; i++) {
        //       if(genreDetail[i] === element.id) {
        //        setListOfGenre(element);
        //        console.warn(element.name);
        //       }
        //     }
        //   });  

    }, [])

    return (
        <>
            <View style={styles.viewStyle}>
                <Image
                    source={{ uri: posterDetail }}
                    style={styleDetail.image}
                />
                <Text
                    style={styleHome.text, styles.text}
                >{JSON.stringify(titleDetail)}</Text>
                <ColoredLine />
                <Text style={styleHome.text, styles.text}>{yearDetail}</Text>
                <ColoredLine />
                <View style={styles.onSameLine}>
                    {genres.map(element => {                       
                        return (<Text style={styles.text}>{element}, </Text>) 
                    })}
                </View>
                <ColoredLine />
                <Text style={styles.text}>{overviewDetail}</Text>
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
