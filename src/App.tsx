import { Header } from '@/components';

import { Outlet } from 'react-router';

import '@/assets/styles/globals.scss';

const App = () => (
  <>
    <Header />

    <div>
      <div className='stars' />
      <div className='stars2' />
      <div className='stars3' />
    </div>

    <div className='container'>
      <Outlet />
    </div>
  </>
);

export default App;
