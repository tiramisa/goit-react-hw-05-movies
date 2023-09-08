// import PropTypes from 'prop-types';
import { FaSistrix } from 'react-icons/fa';
import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [query, SetQuery] = useState('');

  const onHandleChange = e => {
    SetQuery(e.currentTarget.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={onHandleSubmit}>
      <button type="submit" className="button">
        <span className="button-label">
          <FaSistrix />
        </span>
      </button>

      <input
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="movie search"
        value={query}
        onChange={onHandleChange}
      />
    </form>
  );
};

// Form.propTypes = {};

export default Form;
