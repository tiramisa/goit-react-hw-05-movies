import { NavLink, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Ul, Li, ImgCard, Img } from './MovieItemStyled';
import NoFotoImg from '../../img/four-hundred-four.jpeg';
import PropTypes from 'prop-types';

const MovieItem = ({ arrayOfMovies }) => {
  const location = useLocation();

  return (
    <Ul>
      {arrayOfMovies.map(movie => {
        let nameOfMovies = null;
        if (movie.title) {
          nameOfMovies = movie.title;
        } else {
          nameOfMovies = movie.name;
        }
        let posterPath = NoFotoImg;
        if (movie.poster_path) {
          posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        }
        return (
          <Li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <ImgCard>
                <Img srcSet={posterPath} />
              </ImgCard>
            </Link>

            <div>
              <NavLink to={`/movies/${movie.id}`}>{nameOfMovies}</NavLink>
            </div>
          </Li>
        );
      })}
    </Ul>
  );
};

MovieItem.propTypes = {
  arrayOfMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieItem;
