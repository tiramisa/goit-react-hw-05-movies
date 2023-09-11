import { RotatingLines } from 'react-loader-spinner';
import { getPopularMoviesFromApi } from '../../../Api/App';
import { useState, useEffect } from 'react';
import MovieItem from '../../MovieItem/MovieItem';
import Title from 'components/Title/Title';
import { Spinner } from './Spinner';

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
      {loading ? (
        <Spinner>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </Spinner>
      ) : (
        <div>
          {!arrayOfMovies && (
            <div>
              <p>No results found</p>
            </div>
          )}
          {arrayOfMovies && <Title text="Top films" />}
          {arrayOfMovies && <MovieItem arrayOfMovies={arrayOfMovies} />}
        </div>
      )}
    </>
  );
};

export default Home;
