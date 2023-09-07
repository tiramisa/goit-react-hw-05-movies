import { getPopularMoviesFromApi } from '../../../Api/App';
import { useState, useEffect } from 'react';

import MovieItem from '../../MovieItem/MovieItem';
import Title from 'components/Title/Title';

const Home = () => {
  const [arrayOfMovies, setArrayOfMovies] = useState(null);
  useEffect(() => {
    getPopularMoviesFromApi()
      .then(data => {
        setArrayOfMovies(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {!arrayOfMovies && <p>No results found</p>}
      {arrayOfMovies && <Title text="Top films" />}
      {arrayOfMovies && <MovieItem arrayOfMovies={arrayOfMovies} />}
      <div></div>
    </>
  );
};

export default Home;
