import React, {Fragment} from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

const FilmDetail = ({titleDetail, posterDetail}) => {

    return(
        <>
            <View>
                <Image 
                    source={{uri: posterDetail}}
                />
                <Text>{titleDetail}</Text>
                <Text>Yes</Text>
                <Text>Genre</Text>
                <Text>Description</Text>
            </View>
            
        </>
    )

}

export default FilmDetail