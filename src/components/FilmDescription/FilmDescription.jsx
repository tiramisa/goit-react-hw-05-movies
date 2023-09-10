import React from 'react';
import NoFotoImg from '../../img/four-hundred-four.jpeg';

import {
  DescriptionContainer,
  AdditionalInfoWrapper,
  GeneralContainer,
  Score,
} from './FilmDescriptionStyled';

import PropTypes from 'prop-types';

const FilmDescription = ({ movieInfo }) => {
  let nameOfMovies = null;
  if (movieInfo.title) {
    nameOfMovies = movieInfo.title;
  } else {
    nameOfMovies = movieInfo.name;
  }

  let userScore = parseInt(movieInfo.vote_average * 10);
  let genres = movieInfo.genres.map(genre => genre.name).join(', ');

  let posterPath = NoFotoImg;
  if (movieInfo.poster_path) {
    posterPath = `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`;
  }

  return (
    <GeneralContainer>
      <div>
        <p>Go back</p>
        <img srcSet={posterPath} alt={`Poster for ${movieInfo.title}`} />
      </div>
      <DescriptionContainer>
        <h1>{nameOfMovies}</h1>
        <Score>User Score:{userScore}%</Score>
        <h2>Overview</h2>
        <p>{movieInfo.overview}</p>
        <h2>Genre</h2>
        <p>{genres}</p>
      </DescriptionContainer>
      <AdditionalInfoWrapper>
        <h2>Additional Information</h2>
        <p>Casts</p>
        <p>Reviews</p>
      </AdditionalInfoWrapper>
    </GeneralContainer>
  );
};

FilmDescription.propTypes = {
  movieInfo: PropTypes.object.isRequired,
};

export default FilmDescription;
