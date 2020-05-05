import React, {Fragment} from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';
import styleHeader from './styleHeader'

const Header = () => {
    return(
        <View 
            style={styleHeader.header}
        >
            <Text style={styleHeader.text}>Movies</Text>
            <TextInput 
                style={styleHeader.search}
                placeholder={"Search"}
            />
        </View>
    );
}

export default Header