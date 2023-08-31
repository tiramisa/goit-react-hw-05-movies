import { Routes, Route } from 'react-router-dom';
import Home from 'components/Pages/Home/Home';
import Movies from 'components/Pages/Movies/Movies';
import MovieDetails from 'components/Pages/MovieDetails/MovieDetails';
import NotFound from 'components/Pages/NotFound/NotFound';

import background from 'img/popcorn.jpeg';

export const App = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
