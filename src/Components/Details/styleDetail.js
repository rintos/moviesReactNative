import { 
    StyleSheet,
    Dimensions
 } from 'react-native';
 

const displayWidth = Dimensions.get("screen").width;

const styleDetail = StyleSheet.create({
    image: {
        width: 360,
        height: 560,
    },
    text: {
        flex: 1,
        textAlign: 'center',
        marginTop: 60,
        fontSize: 23
    },
    search: {
        flex: 1,
        textAlign: 'center',
        marginBottom: 20,
        backgroundColor: 'lightgray'
    }
})

export default styleDetail 