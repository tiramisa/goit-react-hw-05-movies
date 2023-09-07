import React from 'react';
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
            <p>{nameOfMovies}</p>
          </li>
        );
      })}
    </ul>
  );
};

// MovieItem.propTypes = {};

export default MovieItem;
