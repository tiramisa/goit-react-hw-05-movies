import { NavLink } from 'react-router-dom';
import { VscOctoface } from 'react-icons/vsc';
import SadCat from 'img/sad-cat.png';
import { ErrorNotFound, LinkFound } from './NotFoundStyled';
import 'animate.css';

const NotFound = () => {
  return (
    <div>
      <ErrorNotFound>
        <p>Oops! It seems this page was eaten by cats...meow</p>
        <img src={SadCat} alt="No results found" />
      </ErrorNotFound>
      <LinkFound>
        <NavLink className="animate__heartBeat" to="/">
          <VscOctoface />
          Go to the main page!
          <VscOctoface />
        </NavLink>
      </LinkFound>
    </div>
  );
};

export default NotFound;
