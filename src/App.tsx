import { Header } from '@/components';

import { useState } from 'react';
import { Outlet } from 'react-router';

import '@/assets/styles/globals.scss';

export type FavoritePeople = PeopleInfo;

export const App = () => {
  const [favorite, setFavorite] = useState<FavoritePeople[]>([]);

  const addNewFavorite = (newFavorite: FavoritePeople) => {
    setFavorite([...favorite, newFavorite]);
    localStorage.setItem(newFavorite.name, JSON.stringify(newFavorite));
  };

  return (
    <main>
      <Header />

      <div>
        <div className='stars' />
        <div className='stars2' />
        <div className='stars3' />
      </div>

      <div className='container'>
        <Outlet context={{ favorite, addNewFavorite }} />
      </div>
    </main>
  );
};

export default App;
