import { NavLink } from 'react-router-dom';
import { VscOctoface } from 'react-icons/vsc';
import SadCat from 'img/sad-cat.png';
import { ErrorNotFound } from './NotFoundStyled';

const NotFound = () => {
  return (
    <div>
      <ErrorNotFound>
        <p>Oops! It seems this page was eaten by cats...meow</p>
        <img src={SadCat} alt="No results found" />
      </ErrorNotFound>
      <NavLink
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          margin: '0',
        }}
      >
        <VscOctoface />
        Go to the main page!
        <VscOctoface />
      </NavLink>
    </div>
  );
};

export default NotFound;
