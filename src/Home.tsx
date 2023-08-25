import {useState} from 'react';
import Navigation from './Navigation';

const Home = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div style={{width: '100vw', height: '100%'}}>
      <Navigation />
      <div>Value: {value}</div>
      <button onClick={() => setValue(prev => prev + 1)}>+++</button>
      <button onClick={() => setValue(prev => prev - 1)}>---</button>
    </div>
  );
};

export default Home;
