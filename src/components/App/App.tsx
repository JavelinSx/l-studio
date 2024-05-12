import type { FC } from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Slogan from '../Slogan/Slogan';
import Price from '../Price/Price';
import Contact from '../Contact/Contact';
import Examples from '../Examples/Examples';
import Invocation from '../Invocation/Invocation';

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <>

        <div className='app'>
          <Header></Header>
          <About></About>
          <Examples></Examples>
          <Slogan></Slogan>
          {/* <Invocation></Invocation> */}
          <Price></Price>
          <Contact></Contact>
        </div>
    </>
    
  );
};

export default App;
