import { Header } from '@/components';

import { useState } from 'react';
import { Outlet, Routes } from 'react-router';

export type FavoritePeople = PeopleInfo;

export const App = () => {
  const [favorite, setFavorite] = useState<FavoritePeople[]>([]);

  const addNewFavorite = (newFavorite: FavoritePeople) => {
    setFavorite([...favorite, newFavorite]);
    localStorage.setItem(newFavorite.name, JSON.stringify(newFavorite));
  };

  const removeFavorite = (name: string) => {
    setFavorite(favorite.filter((item) => item.name !== name));
  };

  return (
    <main>
      <Routes />
    </main>
  );
};

export default App;
