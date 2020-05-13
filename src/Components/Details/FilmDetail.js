import React, { Fragment, useEffect, useState } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    SafeAreaView
} from 'react-native';
import Moment from 'moment';

import styleHome from '../Home/styleHome';
import styleDetail from './styleDetail';

import listGenres from '../Api/genre';

let urlImage = "https://image.tmdb.org/t/p/w500";

const WIDTH = Dimensions.get("window").width


const FilmDetail = ({ route, navigation }) => {

    const { filmSelected } = route.params;

    const posterUrl = urlImage + filmSelected.poster_path;

    const [genres, setGenres] = useState([])

    useEffect(() => {
        listGenres(setGenres, filmSelected.genre_ids);
    }, [])

    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <Image
                            source={{ uri: posterUrl }}
                            style={styleDetail.image}
                        />
                        <View >
                            <View style={styles.titleView}>
                                <Text
                                    style={styleHome.text, styles.text}
                                >{filmSelected.original_title}</Text>
                                <TouchableOpacity>
                                    <Image source={require("../../../res/img/s2.png")}
                                        style={styles.favorite}
                                    />

                                </TouchableOpacity>
                            </View>

                        </View>
                        <ColoredLine />
                        <Text style={styleHome.text, styles.text}>{Moment(filmSelected.release_date).format('YYYY')}</Text>
                        <ColoredLine />
                        <View style={styles.onSameLine}>
                            <ShowGenres genresList={genres} />
                        </View>
                        <ColoredLine />

                        <Text style={styles.text}>{filmSelected.overview}</Text>
                    </View>

                </ScrollView>
            </SafeAreaView>

        </>
    )

}

const ShowGenres = ({ genresList }) => {
    return (
        genresList.map((item) => {
            return (<Text key={item} style={styles.text}>{item}, </Text>)
        })
    );
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
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
    onSameLine: {
        flexDirection: "row",
        alignItems: "center",

    },
    titleView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    text: {
        marginTop: 10,
        marginBottom: 10,

    },
    favorite: {
        width: 20,
        height: 20,

    }

})
