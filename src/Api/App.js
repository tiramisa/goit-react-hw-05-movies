const apiKey = 'c20148b967662b7bc56a396dddd785bb';
const movieId = 12345;
const baseUrl = 'https://api.themoviedb.org/3';

const url = `${baseUrl}/movie/${movieId}?api_key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });
