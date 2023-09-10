import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesName } from '../../../Api/App';
import Title from 'components/Title/Title';
import Form from 'components/Form/Form';
import MovieItem from 'components/MovieItem/MovieItem';
import ButtonList from 'components/ButtonList/ButtonList';
import { CatImage } from '../NotFound/NotFoundStyled';
import CatEat from 'img/cat-eat.png';

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
      <p> {searchQuery}</p>
      <ButtonList />
      {arrayOfMovies ? (
        <MovieItem arrayOfMovies={arrayOfMovies} />
      ) : (
        <CatImage src={CatEat} alt="cat" />
      )}
    </div>
  );
};
export default Movies;
