import { getPopularMoviesFromApi } from '../../../Api/App';
import { useState, useEffect } from 'react';
import MovieItem from '../../MovieItem/MovieItem';
import Title from 'components/Title/Title';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [arrayOfMovies, setArrayOfMovies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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
      <div>
        {!arrayOfMovies && (
          <div>
            <p>No results found</p>
          </div>
        )}
        {loading && <Loader />}
        {arrayOfMovies && <Title text="Top films" />}
        {arrayOfMovies && <MovieItem arrayOfMovies={arrayOfMovies} />}
      </div>
    </>
  );
};

export default Home;
