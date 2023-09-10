import { getPopularMoviesFromApi } from '../../../Api/App';
import { useState, useEffect } from 'react';
import MovieItem from '../../MovieItem/MovieItem';
import Title from 'components/Title/Title';
import NoResultsFound from 'img/unknown-cat.png';

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
      {!arrayOfMovies && (
        <div>
          <p>No results found</p>
          <img src={NoResultsFound} alt="No results found" />
        </div>
      )}
      {arrayOfMovies && <Title text="Top films" />}
      {arrayOfMovies && <MovieItem arrayOfMovies={arrayOfMovies} />}
    </>
  );
};

export default Home;
