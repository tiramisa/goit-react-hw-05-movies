import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import background from 'img/kinocat.jpeg';
const Home = lazy(() => import('components/Pages/Home/Home'));
const Movies = lazy(() => import('components/Pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('components/Pages/MovieDetails/MovieDetails')
);
const NotFound = lazy(() => import('components/Pages/NotFound/NotFound'));
const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: '100hv',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
