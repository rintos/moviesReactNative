const urlMovies = "https://api.themoviedb.org/3/movie/popular?api_key=4b299949fc90bb34aebaf5ba4dc28389&language=en-US&page=1"; 
const urlGenres = "https://api.themoviedb.org/3/genre/movie/list?api_key=4b299949fc90bb34aebaf5ba4dc28389&language=en-US";

const listFilmes = async (callback,parameter=1, method='GET', body) => {
    const filmsHTTP = await 
      fetch(`${urlMovies}${parameter}`, {
        method,
        headers: { 'content-type': 'application/json'},
        body
      })
        .then(res => ApiService.ErrorHandler(res))
        //.then(res => res.json());
    
    const filmsJson = await filmsHTTP.json();

    callback(filmsJson.results);
  }
  const ApiService = {

    ErrorHandler: res => {
        if(!res.ok) {
            console.warn(res.reponseText);
        }
        return res
    }

}


  export default listFilmes