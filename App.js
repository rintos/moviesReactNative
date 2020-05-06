
import React, { Fragment,useState,useEffect } from 'react';

import { FlatList } from 'react-native';

import Header from './src/Components/Header/Header';

import listFilmes from './src/Components/Api/feed';
import Films from './src/Components/Home/Films'

const App = () =>  {


  const [films, setFilms] = useState([])
  useEffect(() => {
      listFilmes(setFilms);
  },[])

  return(
    <Fragment>
        <Header />
        <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => 
              <Fragment>
                <Films 
                  title={item.original_title}
                  poster={item.poster_path}
                />
              </Fragment>}
         >
        </FlatList>
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