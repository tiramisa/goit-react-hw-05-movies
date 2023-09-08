import Title from 'components/Title/Title';
import Form from 'components/Form/Form';
import { useState, useEffect } from 'react';

const Movies = () => {
  const [query, SetQuery] = useState('null');
  const [arrayOfMovies, SetArrayOfMovies] = useState('null');
  const onSubmitForm = () => {};
  return (
    <div>
      <Title text="Movie search" />
      <Form onSubmit={onSubmitForm} />
    </div>
  );
};
export default Movies;
