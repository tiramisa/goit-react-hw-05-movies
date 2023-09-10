import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesName } from '../../../Api/App';
import Title from 'components/Title/Title';
import Form from 'components/Form/Form';
import MovieItem from 'components/MovieItem/MovieItem';
import ButtonList from 'components/ButtonList/ButtonList';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [arrayOfMovies, setArrayOfMovies] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const onSubmitForm = res => {
    setSearchParams({ query: res });
    setSearchQuery(res);
    getMoviesName(res).then(data => {
      setArrayOfMovies(data.results);
    });
  };

  useEffect(() => {
    if (query) {
      getMoviesName(query).then(data => {
        setArrayOfMovies(data.results);
      });
    }
  }, [query]);

  return (
    <div>
      <Title text="Movie search" />
      <Form onSubmit={onSubmitForm} />
      <ButtonList />
      {arrayOfMovies && <MovieItem arrayOfMovies={arrayOfMovies} />}
    </div>
  );
};
export default Movies;
