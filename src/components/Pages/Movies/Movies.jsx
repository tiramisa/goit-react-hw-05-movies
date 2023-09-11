import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesName } from '../../../Api/App';
import Title from 'components/Title/Title';
import Form from 'components/Form/Form';
import MovieItem from 'components/MovieItem/MovieItem';
import ButtonList from 'components/ButtonList/ButtonList';
import { CatImage } from '../NotFound/NotFoundStyled';
import CatEat from 'img/cat-eat.png';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [arrayOfMovies, setArrayOfMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const onSubmitForm = res => {
    setSearchParams({ query: res });
    setSearchQuery(res);
    setLoading(true);

    getMoviesName(res).then(data => {
      setArrayOfMovies(data.results);
      setLoading(false);
    });
  };

  useEffect(() => {
    if (query) {
      setLoading(true);
      getMoviesName(query).then(data => {
        setArrayOfMovies(data.results);
        setLoading(false);
      });
    }
  }, [query]);

  return (
    <div>
      <Title text="Movie search" />
      <Form onSubmit={onSubmitForm} />
      <p style={{ display: 'none' }}>{searchQuery}</p>
      <ButtonList />
      {loading ? (
        <Loader />
      ) : arrayOfMovies ? (
        <MovieItem arrayOfMovies={arrayOfMovies} />
      ) : (
        <CatImage src={CatEat} alt="cat" />
      )}
    </div>
  );
};
export default Movies;
