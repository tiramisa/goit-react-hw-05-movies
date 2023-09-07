import { NavLink, Link } from 'react-router-dom';
import { Ul, Li, ImgCard, Img } from './MovieItem.styled';
// import PropTypes from 'prop-types';

const MovieItem = ({ arrayOfMovies }) => {
  console.log('arrayOfMovies', arrayOfMovies);
  return (
    <Ul>
      {arrayOfMovies.map(movie => {
        let nameOfMovies = null;
        if (movie.title) {
          nameOfMovies = movie.title;
        } else {
          nameOfMovies = movie.name;
        }

        return (
          <Li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <ImgCard>
                <Img
                  srcSet={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
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

// MovieItem.propTypes = {};

export default MovieItem;
