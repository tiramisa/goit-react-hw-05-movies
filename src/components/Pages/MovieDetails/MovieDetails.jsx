import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovies } from '../../../Api/App';
import FilmDescription from 'components/FilmDescription/FilmDescription';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    getMovies(movieId).then(data => {
      setMovieInfo(data);
    });
  }, [movieId]);

  return <>{movieInfo && <FilmDescription movieInfo={movieInfo} />}</>;
};

export default MovieDetails;
