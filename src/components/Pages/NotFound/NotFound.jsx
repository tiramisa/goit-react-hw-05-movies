import { NavLink } from 'react-router-dom';
import { VscOctoface } from 'react-icons/vsc';
import { FaCat } from 'react-icons/fa';
const NotFound = () => {
  return (
    <div>
      <p>
        Oops! It seems this page was eaten by cats...
        <FaCat />
        <FaCat />
        <FaCat /> meow
      </p>
      <NavLink to="/">
        <VscOctoface />
        Go to the main page!
        <VscOctoface />
      </NavLink>
    </div>
  );
};

export default NotFound;
