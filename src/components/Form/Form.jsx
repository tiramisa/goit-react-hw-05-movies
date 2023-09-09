import { FaSistrix } from 'react-icons/fa';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Form.module.css';

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
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="movie search"
          value={query}
          onChange={onHandleChange}
        />
        <button type="submit" className={styles.button}>
          <span className={styles.buttonLabel}>
            <FaSistrix />
          </span>
        </button>
      </form>
    </>
  );
};

Form.propTypes = { onSubmit: PropTypes.func.isRequired };
export default Form;
