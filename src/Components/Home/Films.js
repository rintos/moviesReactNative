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
const Films = ({navigation,title, poster, description, filmSelected}) => {

    let urlImage = "https://image.tmdb.org/t/p/w500";
    let posterUrl = urlImage + poster;
    
    let {container, itemText} = styles;

    return (

        <View style={container}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Details',{
                                filmSelected: filmSelected,
                                overviewDetail: description})
                        }>
                <Image
                    source={{ uri: posterUrl }}
                    style={styles.poster}
                />
            </TouchableOpacity>
            <View style={styles.viewHeight}>
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


        </View>
    )



}

export default Films


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 10,
      marginRight: 20,
      marginLeft: 20,
      backgroundColor: "#DCDCDC",
    },
    itemStyle: {
      alignItems: "center",
      justifyContent: "center",
      height: 250,
      flex: 1,
      margin: 1,
      height: WIDTH / numOfColumns
    },
    itemText: {
      fontSize: 12,
      color: "#FF8C00",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      textAlign: 'center', // <-- the magic

    },
    onSameLine: {
        backgroundColor: "#202020",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        
    },
    favorite: {
        alignItems: "center",
        width: 20,
        height: 20,
        marginRight: 15,
    },
    poster: {
        width: 167,
        height: 250,
        alignItems: "center",
        justifyContent: "center",
        
    }, viewHeight: {
        height: 50,
        backgroundColor: "#202020",
        alignContent: "center",
        alignItems: "center",

    }
  })