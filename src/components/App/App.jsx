import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'components/Pages/Home/Home';
import Movies from 'components/Pages/Movies/Movies';
import MovieDetails from 'components/Pages/MovieDetails/MovieDetails';
import NotFound from 'components/Pages/NotFound/NotFound';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import background from 'img/popcorn.jpeg';

export const App = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};