import { Spinner } from './Spinner';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <Spinner>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </Spinner>
    </div>
  );
};

export default Loader;
