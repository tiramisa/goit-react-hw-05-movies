import { useState, useEffect } from 'react';
import { getMoviesName } from '../../../Api/App';
import Title from 'components/Title/Title';
import Form from 'components/Form/Form';

const Movies = () => {
  const [query, SetQuery] = useState(null);
  const [arrayOfMovies, SetArrayOfMovies] = useState(null);

  const onSubmitForm = result => {
    SetQuery(result);
    getMoviesName(result).then(data => {
      console.log(data);
    });
    SetArrayOfMovies();
  };
  return (
    <div>
      <Title text="Movie search" />
      <Form onSubmit={onSubmitForm} />
    </div>
  );
};
export default Movies;
