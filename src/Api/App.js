const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjAxNDhiOTY3NjYyYjdiYzU2YTM5NmRkZGQ3ODViYiIsInN1YiI6IjY0ZWYzZWYxY2FhNTA4MDBjODg2MmU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cJSzQrz_aIhnK8r3fKa3LJujgVKQRqNnRFAtw0Ori3k',
  },
};

// const apiKey = 'c20148b967662b7bc56a396dddd785bb';
const baseURL = 'https://api.themoviedb.org/3/';

export function getPopularMoviesFromApi() {
  const URL = `${baseURL}trending/all/day?language=en-US`;
  return fetch(URL, options).then(response => response.json());
}
