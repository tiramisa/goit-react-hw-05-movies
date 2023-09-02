import { getPopularMoviesFromApi } from '../../../Api/App';
import { useState, useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    getPopularMoviesFromApi()
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return <div>Home</div>;
};

export default Home;
