import { Outlet } from 'react-router';
import { Header } from './Header/Header';

export const Layout = () => {
  return (
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
};
