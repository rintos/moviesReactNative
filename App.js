
import React, { Component } from 'react';
import {
  Text
} from 'react-native';

import Header from './src/Components/Header/Header';
import Home from './src/Components/Home/Home';

const App = () =>  {
  return(
    <>
        <Header />
        <Home />
    </>
  );
}

export default App;
