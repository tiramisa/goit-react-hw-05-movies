const baseURL = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjAxNDhiOTY3NjYyYjdiYzU2YTM5NmRkZGQ3ODViYiIsInN1YiI6IjY0ZWYzZWYxY2FhNTA4MDBjODg2MmU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cJSzQrz_aIhnK8r3fKa3LJujgVKQRqNnRFAtw0Ori3k',
  },
};

export function getPopularMoviesFromApi() {
  const URL = `${baseURL}movie/popular`;
  return fetch(URL, options).then(response => response.json());
}

export function getMovies(movie_id) {
  const URL = `${baseURL}movie/${movie_id}`;
  return fetch(URL, options).then(response => response.json());
}

export function getMoviesName(query) {
  const URL = `${baseURL}search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  return fetch(URL, options).then(response => response.json());
}
// Cast

export function getMoviesCast(movie_id) {
  const URL = `${baseURL}movie/${movie_id}/credits`;
  return fetch(URL, options).then(response => response.json());
}
// Reviews

export function getMoviesReviews(movie_id) {
  const URL = `${baseURL}movie/${movie_id}/reviews`;
  return fetch(URL, options).then(response => response.json());
}
