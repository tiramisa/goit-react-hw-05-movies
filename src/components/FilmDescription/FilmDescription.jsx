import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router-dom';
import NoFotoImg from 'img/four-hundred-four.jpeg';
import {
  DescriptionContainer,
  AdditionalInfoWrapper,
  GeneralContainer,
  Score,
  GoBack,
  StyledLink,
} from './FilmDescriptionStyled';

const FilmDescription = ({ movieInfo }) => {
  const location = useLocation();

  const backLinkHref = location.state?.from || '/';

  const nameOfMovies = movieInfo.title || movieInfo.name;
  const userScore = parseInt(movieInfo.vote_average * 10);
  const genres = movieInfo.genres.map(genre => genre.name).join(', ');

  const posterPath = movieInfo.poster_path
    ? `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`
    : NoFotoImg;

  return (
    <GeneralContainer>
      <div>
        <GoBack>
          <NavLink to={backLinkHref}>Go back</NavLink>
        </GoBack>
        <img srcSet={posterPath} alt={`Poster for ${nameOfMovies}`} />
      </div>
      {movieInfo && (
        <DescriptionContainer>
          <h1>{nameOfMovies}</h1>
          <Score>User Score: {userScore}%</Score>
          <h2>Overview</h2>
          <p>{movieInfo.overview}</p>
          <h2>Genre</h2>
          <p>{genres}</p>
        </DescriptionContainer>
      )}
      <AdditionalInfoWrapper>
        <h2>Additional Information</h2>

        <StyledLink to={`/movies/${movieInfo.id}/cast`} state={location.state}>
          Casts
        </StyledLink>
        <StyledLink
          to={`/movies/${movieInfo.id}/reviews`}
          state={location.state}
        >
          Reviews
        </StyledLink>
      </AdditionalInfoWrapper>
      <Outlet />
    </GeneralContainer>
  );
};

FilmDescription.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default FilmDescription;
