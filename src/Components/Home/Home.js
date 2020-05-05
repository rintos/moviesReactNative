import React, {Fragment} from 'react';
import {
    Text,
    Flatlist,
    Image
} from 'react-native';

import styleHome from './styleHome'

const Home = () => {
    return(
        <>  
            <Image 
                source={require("../../../res/img/sonic.jpg")}
                style={styleHome.poster}    
            />
            <Text
                style={styleHome.text}
            >Matrix Revolutions</Text>
        </>
    );
}

export default Home