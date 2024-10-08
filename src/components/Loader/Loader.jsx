import { Hourglass } from 'react-loader-spinner';
import css from './Loader.module.css';
export default function Loader() {
  return (
    <div>
      <Hourglass
        visible={true}
        height="30"
        width="30"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#a477e0', '#e4e4e4;']}
      />
      <p>Loading data, please wait...</p>
    </div>
  );
}
