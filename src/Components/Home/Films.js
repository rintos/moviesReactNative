import React, { Fragment } from 'react'
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
import styleHome from './styleHome'
import FilmDetail from '../Details/FilmDetail';

let numOfColumns = 2;
const WIDTH = Dimensions.get("window").width
const Films = ({navigation,title, poster, year, genre, description}) => {

    let urlImage = "https://image.tmdb.org/t/p/w500";
    let posterUrl = urlImage + poster;
    
    let {container, itemText} = styles;

    return (

        <View style={container}>
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
            <View style={styles.onSameLine}>
                <Text style={itemText}>{title}</Text>
                <TouchableOpacity>
                    <Image 
                        source={require("../../../res/img/s2.png")}
                        style={styles.favorite}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )



}

export default Films


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10,
      backgroundColor: "#101010"
    },
    itemStyle: {
      backgroundColor: "#101010",
      alignItems: "center",
      justifyContent: "center",
      height: 250,
      flex: 1,
      margin: 1,
      height: WIDTH / numOfColumns
    },
    itemText: {
      fontSize: 15,
      color: "#FFFFFF",
      alignItems: "center",
      justifyContent: "center",
      flex: 1
    },
    onSameLine: {
        flexDirection: "row",
        alignItems: "center"
    },
    favorite: {
        alignItems: "center",
        width: 20,
        height: 20,
        marginRight: 60,
    }
  })