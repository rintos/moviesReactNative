
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Fragment } from 'react';

import Header from './src/Components/Header/Header';

import Home from './src/Components/Home/Home';

const App = () =>  {
  
  return(
    <Fragment>
        <Header />
        <Home />
    </Fragment>


  );


}

export default App;

/*
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>  
            <Header 
              nomeUsuario={item.userName}
              urlImagem={item.userURL}
           />
            <Foto 
              fotoUrl={item.url}
              descricao={item.description}
              quantidadeLikes={item.likes}
            />
            <Comentarios comentarios={item.comentarios}/>
          </Fragment>}
      />
*/