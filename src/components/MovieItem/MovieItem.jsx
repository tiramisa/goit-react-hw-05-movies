import { NavLink } from 'react-router-dom';

// import PropTypes from 'prop-types';

const MovieItem = ({ arrayOfMovies }) => {
  console.log('arrayOfMovies', arrayOfMovies);
  return (
    <ul>
      {arrayOfMovies.map(movie => {
        let nameOfMovies = null;
        if (movie.title) {
          nameOfMovies = movie.title;
        } else {
          nameOfMovies = movie.name;
        }

        return (
          <li key={movie.id}>
            <img
              srcSet={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
            <div>
              {' '}
              <NavLink to={`/movies/${movie.id}`}>{nameOfMovies}</NavLink>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

// MovieItem.propTypes = {};

export default MovieItem;
