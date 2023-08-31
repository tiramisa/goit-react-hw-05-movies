import axios from 'axios';

const apiKey = 'c20148b967662b7bc56a396dddd785bb';
const movieId = 1;
const url = `${axios.defaults.baseURL}movie/${movieId}?api_key=${apiKey}`;

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });
