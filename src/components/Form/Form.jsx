// import PropTypes from 'prop-types';
import { FaSistrix } from 'react-icons/fa';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ onSubmit }) => {
  const [query, SetQuery] = useState('');

  const onHandleChange = e => {
    SetQuery(e.currentTarget.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    if (query === '') {
      toast('Enter at least one character!');
    } else {
      onSubmit(query);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      export default Form;
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
    </>
  );
};

// Form.propTypes = {};
export default Form;
