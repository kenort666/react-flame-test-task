import { Header } from '@/components';

import { Outlet } from 'react-router';

import '@/assets/styles/globals.scss';

const App = () => (
  <main>
    <Header />

    <div className='stars' />
    <div className='stars2' />
    <div className='stars3' />

    <div className='container'>
      <Outlet />
    </div>

  </main>
);

export default App;
