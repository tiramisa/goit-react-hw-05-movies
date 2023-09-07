import { getPopularMoviesFromApi } from '../../../Api/App';
import { useState, useEffect } from 'react';
import MovieItem from '../../MovieItem/MovieItem';

const Home = () => {
  const [arrayOfMovies, setArrayOfMovies] = useState(null);
  useEffect(() => {
    getPopularMoviesFromApi()
      .then(data => {
        console.log(data);
        setArrayOfMovies(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {!arrayOfMovies && <p>nema foto!</p>}
      {arrayOfMovies && <MovieItem arrayOfMovies={arrayOfMovies} />}
      <div></div>
    </>
  );
};

export default Home;
