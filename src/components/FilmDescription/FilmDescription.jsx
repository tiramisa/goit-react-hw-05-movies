import React from 'react';
import NoFotoImg from '../../img/four-hundred-four.jpeg';
// import PropTypes from 'prop-types';

const FilmDescription = ({ movieInfo }) => {
  console.log('movieInfo', movieInfo);

  let nameOfMovies = null;
  if (movieInfo.title) {
    nameOfMovies = movieInfo.title;
  } else {
    nameOfMovies = movieInfo.name;
  }

  let userScore = movieInfo.vote_average * 10;
  let genres = movieInfo.genres.map(genre => genre.name).join(', ');

  let posterPath = NoFotoImg;
  if (movieInfo.poster_path) {
    posterPath = `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`;
  }

  return (
    <div>
      <div>
        <p>Go back</p>
      </div>
      <div>
        <div>
          <img srcSet={posterPath} alt={`Poster for ${movieInfo.title}`} />
        </div>
        <div>
          <h1>{nameOfMovies}</h1>
          <p>User Score:{userScore}</p>
          <h2>Overview</h2>
          <p>{movieInfo.overview}</p>
          <h2>Genre</h2>
          <p>{genres}</p>
        </div>
      </div>

      <div>
        <h2>Additional Information</h2>
        <p>Casts</p>
        <p>Reviews</p>
      </div>
    </div>
  );
};

// FilmDescription.propTypes = {};

export default FilmDescription;
