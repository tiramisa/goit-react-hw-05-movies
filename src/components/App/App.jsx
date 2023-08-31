import { lazy, Suspense } from 'react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import background from 'img/popcorn.jpeg';

const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Home = lazy(() => import('Pages/Home/Home'));
const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('Pages/Movies/Movies'));

export const App = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
