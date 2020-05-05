import { 
    StyleSheet,
    Dimensions
 } from 'react-native';
 

const displayWidth = Dimensions.get("screen").width;

const styleHeader = StyleSheet.create({
    header: {
        width: displayWidth,
        height: 160,
        backgroundColor: 'orange'
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

export default styleHeader 