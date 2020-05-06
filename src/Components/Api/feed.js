const listFilmes = async (callback) => {
    const filmsHTTP = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4b299949fc90bb34aebaf5ba4dc28389&language=en-US&page=1");
    const filmsJson = await filmsHTTP.json();

    callback(filmsJson.results);
  }

  export default listFilmes