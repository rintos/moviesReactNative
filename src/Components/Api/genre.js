const listGenres = async (callback, genreDetail) => {
    const genresHTTP = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=4b299949fc90bb34aebaf5ba4dc28389&language=en-US")
    const genresJson = await genresHTTP.json();

  let genres = genresJson['genres'];
  let namesOfGenre = [];
  
    genres.forEach(element => {
      var i;
      for (i = 0; i < genreDetail.length; i++) {
        if(genreDetail[i] === element.id) {
          namesOfGenre.push(element.name);
        }
      }
    });  

    callback(namesOfGenre);
  }

  export default listGenres