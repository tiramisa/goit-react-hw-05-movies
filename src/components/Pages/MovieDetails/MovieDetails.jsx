import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovies } from '../../../Api/App';
import FilmDescription from 'components/FilmDescription/FilmDescription';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies(movieId).then(data => {
      setMovieInfo(data);
    });
  }, [movieId]);

  return (
    <>
      {movieInfo && <FilmDescription movieInfo={movieInfo} />}
      {loading && <Loader />}
    </>
  );
};

export default MovieDetails;
